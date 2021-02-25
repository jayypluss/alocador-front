import React, { useState, FormEvent, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ContainerItem, { Container } from '../../components/ContainerItem';
import api from '../../services/api';
import './styles.css'


function ContainerList() {
    const [containers, setContainers] = useState([]);

    useEffect(() => {
        searchContainers();
    }, [])

    async function searchContainers(e?: FormEvent) {
        e?.preventDefault();
        const response = await api.get('containers');
        setContainers(response.data);
    }

    return (
        <div id="page-container-list" className="container">
            <PageHeader title="Lista de Containers disponíveis">
                <form id="search-containers" onSubmit={searchContainers}>
                    {/* <button type="submit">
                        Recarregar dados
                    </button> */}
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