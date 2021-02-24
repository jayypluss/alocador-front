import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

function Landing() {

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    {/* <img src={} alt=""/> */}
                    <h2>Alocador de cargas</h2>
                </div>

                <div className="buttons-container">
                    <div>
                        <Link to="/container/criar" className="criar">
                            {/* <img src={} alt=""/> */}
                            Criar Container
                        </Link>
                        <Link to="/container/listar/" className="listar">
                            {/* <img src={} alt=""/> */}
                            Listar containers
                        </Link>
                    </div>
                    <div>
                        <Link to="/grupocaixas/criar" className="criar">
                            {/* <img src={} alt=""/> */}
                            Criar Grupo de Caixas
                        </Link>
                        <Link to="/grupocaixas/listar/" className="listar">
                            {/* <img src={} alt=""/> */}
                            Listar grupos de caixas
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;