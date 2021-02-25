import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import api from '../../services/api';
import './styles.css'


function GrupoCaixasForm() {
    const history = useHistory();

    const [comprimento, setComprimento] = useState('');
    const [altura, setAltura] = useState('');
    const [largura, setLargura] = useState('');
    const [quantidadeCaixas, setQuantidadeCaixas] = useState('');

    function handleCreateGrupoCaixas(e: FormEvent) {
        e.preventDefault();

        api.post('gruposCaixas', {
            comprimento,
            altura,
            largura,
            quantidadeCaixas,
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch((_) => {   
            alert('Erro no cadastro!');
        });
    }

    return (
        <div id="page-grupo-caixas-form" className="grupo-caixas">
            <PageHeader 
                title={`Criar Grupo de Caixas`}
            />
            
            <main>
                <form onSubmit={handleCreateGrupoCaixas}>
                    <fieldset>
                        <legend>Preencha os dados do Grupo de Caixas</legend>
                        <Input 
                            name="comprimento" 
                            label="Comprimento (cm)"
                            value={comprimento} 
                            onChange={(e) => { setComprimento(e.target.value) }} 
                        />
                        <Input 
                            name="altura" 
                            label="Altura (cm)"
                            value={altura} 
                            onChange={(e) => { setAltura(e.target.value) }} 
                        />
                        <Input 
                            name="largura" 
                            label="Largura (cm)"
                            value={largura} 
                            onChange={(e) => { setLargura(e.target.value) }} 
                        />
                        <Input 
                            name="quantidadeCaixas" 
                            label="Quantidade de caixas (cm)"
                            value={quantidadeCaixas} 
                            onChange={(e) => { setQuantidadeCaixas(e.target.value) }} 
                        />
                    </fieldset>

                    <footer>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default GrupoCaixasForm;