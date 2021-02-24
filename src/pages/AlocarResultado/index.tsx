import React, { useEffect } from 'react';
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
                    {/* <p>Comprimento: {}</p>
                    <p>Altura: {}</p>
                    <p>Largura: {}</p> */}
                    
                    <p>Volume Alocado: {resultadoAlocacao.volumeAlocado} cm³</p>
                    

                    {resultadoAlocacao.caixasAlocadas.map((caixa: Caixa) => {
                        return <CaixaItem key={`${caixa.id}->${caixa.idGrupoCaixas}`} caixa={caixa} />
                    })}

                      
                {/* _id: "6036a88afe20180039954cad"
                    alturaY: 150
                    caixasAlocadas: Array []
                    comprimentoX: 400
                    larguraZ: 150
                    quantidadeCaixasAlocadas: 0
                    volumeAlocado: 0 */}
                </main>
            </div>
    )
}

// export class AlocarResultado extends React.Component {
//     constructor(props: any) {
//         super(props);
//     render() {
//         return (
//             <div id="page-alocar-resultado" className="alocacao">
//                 <PageHeader title="Resultado da alocação"> </PageHeader>
//                 <main>
                    
//                 </main>
//             </div>
//         )
//     }
// }

export default AlocarResultado;