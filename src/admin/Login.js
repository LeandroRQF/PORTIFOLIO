import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from './../firebase-config'

    class Login extends Component {
        constructor(props) {
            super(props)

            this.state = {
                estaAutenticado: false,
                estaLogando: false,
                erro: false
            }

            this.email = null
            this.senha = null

            this.autenticaUsuario = this.autenticaUsuario.bind(this)
        }

        autenticaUsuario() {
            this.setState({ estaLogando: true, erro: false })
            auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
                .then(user => {
                    console.log('Usuário logado: ', user)
                    this.setState({ estaAutenticado: true })
                })
                .catch(err => {
                    console.log('Erro', err)
                    this.setState({ erro: true, estaAutenticado: false, estaLogando: false })
                })
        }

        render() {
            if (this.state.estaAutenticado) {
                return <Redirect to='/admin' />
            }

            return (
                <div style={{ padding: '120px' }}>
                    <h2>Login</h2>

                    <div className="form-group">
                        <label forhtml="exampleInputEmail1">Endereço de email</label>
                        <input type="email" name='email' ref={ref => this.email = ref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label forhtml="exampleInputPassword1">Senha</label>
                        <input type="password" name='senha' ref={ref => this.senha = ref} className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                        {this.state.erro && <small id="emailHelp" className="form-text text-muted">Email e/ou senha inválidos</small>}
                    </div>

                    <button type="button" disabled={this.state.estaLogando} className="btn btn-primary" onClick={this.autenticaUsuario}>Acessar</button>

                </div>
            )
        }
    }

export default Login