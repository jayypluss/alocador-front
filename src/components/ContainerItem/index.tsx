import React from 'react';
import './styles.css'


export interface Container {
    _id: number;
    comprimentoX: number;
    alturaY: number;
    larguraZ: number;
}

export interface ContainerItemProps {
    container: Container;
}


const ContainerItem: React.FC<ContainerItemProps> = ({ container }) => {
    return (
        <article className="container-item">
            <header>
                <div>
                    <strong>Container {container._id}</strong>
                </div>
            </header>
            
            <p>Comprimento: {container.comprimentoX}</p>
            <p>Altura: {container.alturaY}</p>
            <p>Largura: {container.larguraZ}</p>
            
            <footer>
            </footer>
        </article>
    )
}

export default ContainerItem;