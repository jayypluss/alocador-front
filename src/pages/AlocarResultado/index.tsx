import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PageHeader from '../PageHeader';

import './styles.css'


interface stateType {
    respostaAlocacao: any;
 }
 
function AlocarResultado() {
    const { state } = useLocation<stateType>();
    let resultadoAlocacao = state.respostaAlocacao;
    
    
    useEffect(() => {
        console.log(state);
    },[]);

    return (
            <div id="page-resultado-alocacao" className="alocacao">
                <PageHeader title="Resultado da alocação"> </PageHeader>
                <main>
                    {/* <p>Comprimento: {}</p>
                    <p>Altura: {}</p>
                    <p>Largura: {}</p> */}
                    
                    <p>Volume Alocado: {resultadoAlocacao.volumeAlocado} cm³</p>
                    

                    {resultadoAlocacao.caixasAlocadas.map((caixa: Caixa) => {
                        return <CaixaItem key={caixa._id} caixa={caixa} />
                    })}
                    <p>Caixas Alocadas: {JSON.stringify(resultadoAlocacao.caixasAlocadas)}</p>

                      
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
//         console.log(props);
//         console.log(props?.container);
//     }

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