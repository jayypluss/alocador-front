import React from 'react';

import './styles.css'

export interface GrupoCaixas {
    _id: number;
    comprimentoX: number;
    alturaY: number;
    larguraZ: number;
    quantidadeCaixas: number;
}

interface GrupoCaixasItemProps {
    grupoCaixas: GrupoCaixas;
}

const GrupoCaixasItem: React.FC<GrupoCaixasItemProps> = ({ grupoCaixas }) => {
    return (
        <article className="grupo-caixas-item">
            <header>
                <div>
                    <strong>Grupo de caixas {grupoCaixas._id}</strong>
                </div>
            </header>
            
            <p>Comprimento: {grupoCaixas.comprimentoX}</p>
            <p>Altura: {grupoCaixas.alturaY}</p>
            <p>Largura: {grupoCaixas.larguraZ}</p>
            <p>Quantidade: {grupoCaixas.quantidadeCaixas}</p>
            
            <footer>
                
            </footer>

        </article>
    )
}

export default GrupoCaixasItem;