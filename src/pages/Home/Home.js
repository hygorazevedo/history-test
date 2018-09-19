import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Form />
                <div className='col-md-6'>
                    <Table />
                </div>
            </div>
        )
    }
}

