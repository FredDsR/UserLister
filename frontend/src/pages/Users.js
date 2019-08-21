import React, { Component } from 'react';
import api from '../services/api';

import './Users.css';

import edit from '../assets/edit.svg';
import trash from '../assets/trash.svg';

class Users extends Component {
    state = {
        list: [],
    };
    
    async componentDidMount() {
        const response = await api.get('user');

        this.setState({ list: response.data });
    };

    handleEdit = id => {
        this.props.history.push(`/user/${id}`);
    };

    handleDelete = id => {
        api.delete(`/user/${id}`);
        window.location.reload();
    };

    render() {
        return (
            <section id="user-list">
                { this.state.list.map(user => (
                    <article key={user._id}>
                        <header>
                            <div className="user-name">
                                <span>{user.name}</span>
                            </div>
                        </header>
                        <div className="user-info">
                            <p>E-mail: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Address: {user.address}</p>
                        </div>
                        <footer>
                            <div className="actions">
                                <button type="button" onClick={() => this.handleEdit(user._id)}>
                                    <img src={edit} alt=""/>
                                </button>
                                <button type="button" onClick={() => this.handleDelete(user._id)}>
                                    <img src={trash} alt=""/>
                                </button>
                            </div>
                        </footer>
                    </article>
                )) }
            </section>
        );
    };
};

export default Users;