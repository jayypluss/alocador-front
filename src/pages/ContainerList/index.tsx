import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';
import api from '../../services/api';
import ContainerItem, { Container } from '../../components/ContainerItem';

function ContainerList() {
    const [containers, setContainers] = useState([]);

    // const [id, setId] = useState('');

    async function searchContainers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('containers', {
            params: {
                // id
            }
        });

        setContainers(response.data);
    }

    return (
        <div id="page-container-list" className="container">
            <PageHeader title="Estes são os containers disponíveis.">
                <form id="search-containers" onSubmit={searchContainers}>
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
                {containers.map((container: Container) => {
                    return <ContainerItem key={container._id} container={container} />
                })}
            </main>
        </div>
    )
}

export default ContainerList;