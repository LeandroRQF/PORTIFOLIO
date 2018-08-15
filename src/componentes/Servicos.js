import React from 'react'

const Servicos = props => {
    return (
        <div>
            {/* Container (Seção Serviços) */}
            < div id='servicos' className='container-fluid text-center' >
                <h2>Serviços</h2>
                <h4>O que nós oferecemos</h4>
                <br />
                <div className='row '>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-off logo-small'></span>
                        <h4>Serviço 01</h4>
                        <p>Descrição serviço 01</p>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-heart logo-small'></span>
                        <h4>Serviço 02</h4>
                        <p>Descrição serviço 02</p>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-lock logo-small'></span>
                        <h4>Serviço 03</h4>
                        <p>Descrição serviço 03</p>
                    </div>
                </div>
                <br /> <br />
                <div className='row '>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-leaf logo-small'></span>
                        <h4>Serviço 04</h4>
                        <p>Descrição serviço 04</p>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-certificate logo-small'></span>
                        <h4>Serviço 05</h4>
                        <p>Descrição serviço 05</p>
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-wrench logo-small'></span>
                        <h4>Serviço 06</h4>
                        <p>Descrição serviço 06</p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Servicos