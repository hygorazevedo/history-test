import React, { Component } from 'react';
import { createUser } from '../../actions'
import { connect } from 'react-redux'

class Form extends Component {
    constructor(props) {
        super(props);
        this.loginId = React.createRef();
      }

    state = {
        user:{
            id: '',
            login: '',
            senha: ''
        }
    }
    
    loadLoginData = (e) => {
        var user = { ...this.state.user }
        user.login = e.target.value;
        this.setState({ user })
    }

    loadSenhaData = (e) => {
        var user = { ...this.state.user }
        user.senha = e.target.value;
        this.setState({ user })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var user = { ...this.state.user }
        user.id = Date.now();
        this.props.createUser(user);
        this.setState({ user })
        this.Clear();
    }

    Clear = () => {
        this.loginId.current.focus();
        var user = { ...this.state.user }
        user.login = '';
        user.senha = '';
        this.setState({ user })
    }

    render() {
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <h3>Cadastro</h3>
                <div className='form-group'>
                    <div className='col-md-4'>
                        <input ref={ this.loginId } className='form-control' type='text' onChange={(event) => this.loadLoginData(event)} value={this.state.user.login} required/>
                    </div>
                    <div className='col-md-3'>
                        <input className='form-control' type='password' onChange={(event) => this.loadSenhaData(event)} value={this.state.user.senha} required/>
                    </div>
                    <input type='submit' className='btn btn-primary' value='Cadastrar'/>
                </div>
            </form>
        )
    }
}
const mapStateToProps = ({ users }) => ({
    users
})
export default connect(mapStateToProps, { createUser })(Form)