import React, { Component } from 'react';
import api from '../services/api';

import './New.css';

class New extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        address: '',
    };

    async componentDidMount() {
        const path = window.location.pathname;
        if(path !== '/user/:id'){
            const id = path.slice(6, path.length);
            const user = await api.get(`/user/${id}`);
            this.setState({ name: user.data.name });
            this.setState({ email: user.data.email });
            this.setState({ phone: user.data.phone });
            this.setState({ address: user.data.address });
        }else{
           
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const path = window.location.pathname;
        if(path !== '/user/:id'){
            const id = path.slice(6, path.length);
            
            await api.put(`/user/${id}`, {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address
            });
        }else{
            await api.post('user', {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address
            });
        }
        this.props.history.push('/user');
    };

    handleCancel = () => {
        this.props.history.push('/user');
    }

    render() {
        return (
            <form id="new-user" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.name}
                />

                <input 
                    type="text" 
                    name="email"
                    placeholder="E-mail"
                    onChange={this.handleChange}
                    value={this.state.email}
                />

                <input 
                    type="text" 
                    name="phone"
                    placeholder="Phone"
                    onChange={this.handleChange}
                    value={this.state.phone}
                />

                <input 
                    type="text" 
                    name="address"
                    placeholder="Address"
                    onChange={this.handleChange}
                    value={this.state.address}
                />

                <button type="submit">Send</button>
                <button type="button" onClick={this.handleCancel}>Cancel</button>
            </form>
        );
    }
}

export default New;