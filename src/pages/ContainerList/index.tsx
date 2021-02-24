import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import ContainerItem, { Container } from '../../components/ContainerItem';
import api from '../../services/api';
import './styles.css'


function ContainerList() {
    const [containers, setContainers] = useState([]);

    async function searchContainers(e: FormEvent) {
        e.preventDefault();
        const response = await api.get('containers');
        setContainers(response.data);
    }

    return (
        <div id="page-container-list" className="container">
            <PageHeader title="Estes são os containers disponíveis.">
                <form id="search-containers" onSubmit={searchContainers}>
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