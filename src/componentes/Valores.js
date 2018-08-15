import React from 'react'

const Valores = props => {
    return (
        <div>
            <div id='valores' className='container-fluid'>
                <div className='text-center'>
                    <h2>Valores</h2>
                    <h4>Escolha um plano de pagamento que funcione para você</h4>
                </div>
                <div className='row '>
                    <div className='col-sm-4 col-xs-12'>
                        <div className='panel panel-default text-center'>
                            <div className='panel-heading'>
                                <h1>Básico</h1>
                            </div>
                            <div className='panel-body'>
                                <p><strong>01</strong> Um</p>
                                <p><strong>02</strong> Dois</p>
                                <p><strong>03</strong> Três</p>
                                <p><strong>04</strong> Quatro</p>
                                <p><strong>05</strong> Cinco</p>
                            </div>
                            <div className='panel-footer'>
                                <h3>R$ 19,00</h3>
                                <h4>por mês</h4>
                                <button className='btn btn-lg'>Inscrever</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                        <div className='panel panel-default text-center'>
                            <div className='panel-heading'>
                                <h1>Pro</h1>
                            </div>
                            <div className='panel-body'>
                                <p><strong>01</strong> Um</p>
                                <p><strong>02</strong> Dois</p>
                                <p><strong>03</strong> Três</p>
                                <p><strong>04</strong> Quatro</p>
                                <p><strong>05</strong> Cinco</p>
                            </div>
                            <div className='panel-footer'>
                                <h3>R$ 29,00</h3>
                                <h4>por mês</h4>
                                <button className='btn btn-lg'>Inscrever</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                        <div className='panel panel-default text-center'>
                            <div className='panel-heading'>
                                <h1>Premium</h1>
                            </div>
                            <div className='panel-body'>
                                <p><strong>01</strong> Um</p>
                                <p><strong>02</strong> Dois</p>
                                <p><strong>03</strong> Três</p>
                                <p><strong>04</strong> Quatro</p>
                                <p><strong>05</strong> Cinco</p>
                            </div>
                            <div className='panel-footer'>
                                <h3>R$ 49,00</h3>
                                <h4>por mês</h4>
                                <button className='btn btn-lg'>Inscrever</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Valores