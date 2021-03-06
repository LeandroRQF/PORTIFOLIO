import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import config from './..//firebase-config'
import ItemPortifolio from './ItemPortifolio';

class Portifolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portifolio: {

            }
        }

        config.syncState('portifolio', {
            context: this,
            state: 'portifolio',
            asArray: false
        })
    }

    render() {
        return (
            <div>
                <div id='portifolio' className='container-fluid text-center bg-grey'>
                    <h2>Portifolio</h2><br />
                    <h4>O que nós criamos</h4>
                    <div className='row text-center '>
                        {
                            Object.keys(this.state.portifolio)
                                .map(key => {
                                    return <ItemPortifolio key={key} conteudo={this.state.portifolio[key]} />
                                })
                        }
                    </div><br />

                    <h2>O que nossos clientes dizem</h2>
                    <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
                        {/* Indicators */}
                        <ol className='carousel-indicators'>
                            <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
                            <li data-target='#myCarousel' data-slide-to='1'></li>
                            <li data-target='#myCarousel' data-slide-to='2'></li>
                        </ol>

                        {/* Wrapper for slides */}
                        <div className='carousel-inner' role='listbox'>
                            <div className='item active'>
                                <h4>'Avaliação 01'<br /><span>Pessoa, Cargo, Empresa</span></h4>
                            </div>
                            <div className='item'>
                                <h4>'Avaliação 02'<br /><span>Pessoa, Cargo, Empresa</span></h4>
                            </div>
                            <div className='item'>
                                <h4>'Avaliação 03'<br /><span>Pessoa, Cargo, Empresa</span></h4>
                            </div>
                        </div>

                        {/* Left and right controls */}
                        <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
                            <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                            <span className='sr-only'>Anterior</span>
                        </a>

                        <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
                            <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                            <span className='sr-only'>Próximo</span>
                        </a>
    
                    </div>
                </div>
            </div >
        )
    }
}

export default Portifolio