import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';
import api from '../../services/api';
import GrupoCaixasItem, { GrupoCaixas } from '../../components/GrupoCaixasItem';

function GrupoCaixasList() {
    const [gruposCaixas, setGruposCaixas] = useState([]);

    // const [id, setId] = useState('');

    async function searchCaixas(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('gruposCaixas', {
            params: {
                // id
            }
        });

        setGruposCaixas(response.data);
    }

    return (
        <div id="page-container-list" className="container">
            <PageHeader title="Estes são os grupos de caixas disponíveis.">
                <form id="search-grupos-caixas" onSubmit={searchCaixas}>
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
                {gruposCaixas.map((grupoCaixas: GrupoCaixas) => {
                    return <GrupoCaixasItem key={grupoCaixas._id} grupoCaixas={grupoCaixas} />
                })}
            </main>
        </div>
    )
}

export default GrupoCaixasList;