import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { auth } from './../firebase-config'
import AdminMenu from './AdminMenu';
import AdminPortifolio from './AdminPortifolio';

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                estaLogando: false,
                estaAutenticado: !!user,
                user
            })
        })
    }

    render() {
        if (this.state.estaLogando) {
            return (
                <div style={{ padding: '10px' }}>                    
                    <p><span className="glyphicon glyphicon-refresh" /> aguarde... </p>
                </div>
            )
        }

        if (!this.state.estaAutenticado) {
            return <Redirect to='/login' />
        }

        return (
            <div style={{ padding: '10px' }}>
                <h2>Painel Administrativo</h2>

                <Route path={'/'} component={AdminMenu} />
                <Route path={'/admin/portifolio'} component={AdminPortifolio} />

            </div>
        )
    }
}

export default Admin