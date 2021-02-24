import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import api from '../../services/api';
import './styles.css'


function ContainerForm() {
    const history = useHistory();

    const [comprimento, setComprimento] = useState('');
    const [altura, setAltura] = useState('');
    const [largura, setLargura] = useState('');

    function handleCreateContainer(e: FormEvent) {
        e.preventDefault();

        api.post('containers', {
            comprimento,
            altura,
            largura
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch((e) => {   
            alert('Erro no cadastro!');
        });
    }

    return (
        <div id="page-container-form" className="container">
            <PageHeader 
                title={`Criar container`}
            />
            
            <main>
                <form onSubmit={handleCreateContainer}>
                    <fieldset>
                        <legend>Dados do container</legend>
                        <Input 
                            name="comprimento" 
                            label="Comprimento"
                            value={comprimento} 
                            onChange={(e) => { setComprimento(e.target.value) }} 
                        />
                        <Input 
                            name="altura" 
                            label="Altura"
                            value={altura} 
                            onChange={(e) => { setAltura(e.target.value) }} 
                        />
                        <Input 
                            name="largura" 
                            label="Largura"
                            value={largura} 
                            onChange={(e) => { setLargura(e.target.value) }} 
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

export default ContainerForm;