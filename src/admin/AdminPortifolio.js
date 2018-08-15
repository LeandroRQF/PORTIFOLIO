import React, { Component } from 'react'
import config, { storage } from './..//firebase-config'

class AdminPortifolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaSalvando: false
        }

        this.salvarPortifolio = this.salvarPortifolio.bind(this)
    }

    salvarPortifolio(e) {
        const itemPortifolio = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem: this.imagem
        }

        this.setState({ estaSalvando: true })

        const arquivo = itemPortifolio.imagem.files[0]
        const { name, size, type } = arquivo

        const ref = storage.ref(name)
        ref.put(arquivo)
            .then(img => {
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        const novoPortifolio = {
                            titulo: itemPortifolio.titulo,
                            descricao: itemPortifolio.descricao,
                            imagem: downloadURL
                        }
                        config.push('portifolio', {
                            data: novoPortifolio
                        })
                        this.setState({ estaSalvando: false })
                    })
            })

        e.preventDefault()
    }

    render() {
        if (this.state.estaSalvando) {
            return (
                <div className='container'>
                    <p><span className="glyphicon glyphicon-refresh" /> aguarde... </p>
                </div>
            )
        }

        return (
            <div style={{ padding: '120px' }}>
                <h2>Portifolio - Área Administrativa</h2>

                <form onSubmit={this.salvarPortifolio}>
                    <div className='form-group'>
                        <label htmlFor='titulo'>Título</label>
                        <input type='text' className='form-control' id='titulo' placeholder='Título' ref={(ref) => this.titulo = ref} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='descricao'>Descrição</label>
                        <textarea className='form-control' id='descricao' rows='3' placeholder='Descrição' ref={(ref) => this.descricao = ref} ></textarea>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='imagem'>Selecione um arquivo (imagem)</label>
                        <input type='file' className='form-control-file' id='imagem' ref={(ref) => this.imagem = ref} />
                    </div>

                    <button type='submit' className='btn btn-primary'>Salvar</button>
                </form>

            </div>
        )
    }
}

export default AdminPortifolio