import React from 'react';
import { useLocation } from 'react-router-dom';
import CaixaItem, { Caixa } from '../../components/CaixaItem';
import PageHeader from '../../components/PageHeader';
import './styles.css'


interface stateType {
    respostaAlocacao: any;
 }
 

function AlocarResultado() {
    const { state } = useLocation<stateType>();
    let resultadoAlocacao = state.respostaAlocacao;
    
    return (
            <div id="page-resultado-alocacao" className="alocacao">
                <PageHeader title="Resultado da alocação"> </PageHeader>
                <main>                    
                    <p>Volume Alocado: {resultadoAlocacao.volumeAlocado} cm³</p>
                    
                    {resultadoAlocacao.caixasAlocadas.map((caixa: Caixa) => {
                        return <CaixaItem key={`${caixa.id}->${caixa.idGrupoCaixas}`} caixa={caixa} />
                    })}
                </main>
            </div>
    )
}

export default AlocarResultado;