import React, { useState, FormEvent, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import PageHeader from '../../components/PageHeader';

import './styles.css'
import api from '../../services/api';
import ContainerItem, { Container } from '../../components/ContainerItem';
import { Radio } from '@material-ui/core';
import GrupoCaixasItem, { GrupoCaixas } from '../../components/GrupoCaixasItem';
import { useHistory } from 'react-router-dom';

function Alocar() {
    const history = useHistory();
    
    const [containers, setContainers] = useState([]);
    const [gruposCaixas, setGruposCaixas] = useState([]);

    const [selectedGruposCaixas, setSelectedGruposCaixas] = useState({});
    const [selectedContainer, setSelectedContainer] = useState('');

    const [respostaAlocacao, setRespostaAlocacao] = useState('');

    // const [id, setId] = useState('');


    useEffect(() => {
        searchContainers();
        searchGruposCaixas();
    }, [])

    async function handleSearchSubmit(formSubmitEvent: FormEvent) {
        formSubmitEvent.preventDefault();

        await searchContainers();
        await searchGruposCaixas();
    }

    async function handleFormSubmit(formSubmitEvent: FormEvent) {
        formSubmitEvent.preventDefault();

        console.log(formSubmitEvent.target);

        let idContainerSelecionado = selectedContainer;

        let idsGruposCaixasSelecionados: any[] = [];
        Object.keys(selectedGruposCaixas).forEach((key) => {
            idsGruposCaixasSelecionados.push(key);
        });
        console.log(`Container selecionado: ${idContainerSelecionado}`);
        console.log(`Grupos de Caixas selecionados: ${JSON.stringify(idsGruposCaixasSelecionados)}`);

        const response = await api.post('alocar', {
            containerId: idContainerSelecionado,
            gruposCaixasIds: idsGruposCaixasSelecionados
        });

        setRespostaAlocacao(response.data);
        history.push('/resultado/alocacao', { respostaAlocacao: response.data });
    }

    async function searchContainers() {
        const response = await api.get('containers', {
            params: {
                // id
            }
        });

        setContainers(response.data);
    }


    async function searchGruposCaixas() {
        const response = await api.get('gruposCaixas', {
            params: {
                // id
            }
        });

        setGruposCaixas(response.data);
    }

    function handleCheckboxChange(event: any) {
        console.log(event.target);
        let grupoCaixasId = event.target.value;
        console.log(grupoCaixasId);
        setSelectedGruposCaixas({ ...selectedGruposCaixas, [grupoCaixasId]: event.target.checked });
    }

    function handleRadioChange(event: any) {
        console.log(event.target);
        let containerId = event.target.value;
        console.log(containerId);
        setSelectedContainer(containerId);
    }

    const containerListItem = (container: any) => (
        <div key={container._id} className="list-item">
            <Radio
                checked={selectedContainer === container._id}
                value={container._id}
                name="radio-button"
                onChange={handleRadioChange}
            />
            <ContainerItem container={container} />
        </div>
    )

    const gruposCaixasListItem = (grupoCaixas: any) => (
        <div key={grupoCaixas._id} className="list-item">
            <Checkbox
                value={grupoCaixas._id}
                name="checkbox-button"
                onChange={handleCheckboxChange}
            />
            <GrupoCaixasItem grupoCaixas={grupoCaixas} />
        </div>
    )

    return (
        <div id="page-container-list" className="container">
            <PageHeader title="Estes são os containers disponíveis.">
                <form id="search-items" onSubmit={handleSearchSubmit}>
                    {/* <Input 
                        type="id" 
                        name="id"
                        label="ID"
                        value={id}
                        onChange={ e => { setId(e.target.value) } }
                    /> */}
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                <form id="componentes-alocacao" onSubmit={handleFormSubmit}>
                    <fieldset className="containers-fieldset">
                        {containers.map((container: Container) => {
                            return containerListItem(container)
                        })}
                    </fieldset>
                    <fieldset className="grupos-caixas-fieldset">
                        {gruposCaixas.map((grupoCaixa: GrupoCaixas) => {
                            return gruposCaixasListItem(grupoCaixa)
                        })}
                    </fieldset>

                    <footer>
                        <button type="submit">
                            Alocar grupos de caixas no container
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default Alocar;