import React, { Component } from 'react';
import { deleteUser } from '../../actions'
import { connect } from 'react-redux'

class Table extends Component {
    handleDelete = (e, id) => {
        e.preventDefault();
        this.props.deleteUser(id);
    }
    render() {
        return(
            <table className='table'>
                <thead>
                    <tr>
                        <th className='hidden'></th>
                        <th>User</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.users.users.map((user, index) => (
                        <tr key={index}>
                            <td className='hidden'>{user.id}</td>
                            <td>{user.login}</td>
                            <td>{user.senha}</td>
                            <td><span className="glyphicon glyphicon-remove" onClick={ (event) => this.handleDelete(event, user.id) }></span></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = ({ users }) => ({
    users
})
export default connect(mapStateToProps, { deleteUser })(Table)