import React from 'react'
import { Link } from 'react-router-dom'

const Cabecalho = props => {
    return (
        <div>
            <div className='jumbotron text-center'>
                <h1>ENGENHARIA CIVIL</h1>
                <p>Leandro Ricardo Quadros Faria</p>
                <form>
                    {/*     
                    <div style={{ padding: '20px' }} className='input-group'>
                        <input type='email' className='form-control' size='50' placeholder='Endereço de email' required />
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger'>Se inscrever</button>
                        </div>
                    </div>    
                    */}

                </form>
            </div>

            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>

                        <Link className='navbar-brand' to='/'>Logo</Link>
                    </div>

                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>INÍCIO</Link></li>
                            <li><Link to='/servicos'>SERVIÇOS</Link></li>
                            <li><Link to='/portifolio'>PORTIFOLIO</Link></li>
                            <li><Link to='/valores'>VALORES</Link></li>
                            <li><Link to='/equipe'>EQUIPE</Link></li>
                            <li><Link to='/contato'>CONTATO</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Cabecalho