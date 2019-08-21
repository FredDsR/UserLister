import React, { Component } from 'react';

import './Start.css';

import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';

class Start extends Component {
    render() {
        return (
            <section id="info-card">
                <article>
                    <header>
                        <div className="author-name">
                            <h2>Frederico D. S. Reckziegel</h2>
                        </div>
                    </header>
                    <div className="author-info">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Olá, meu nome está aí em cima e minhas redes estão logo no final deste card. No momento em que esta aplicação foi finalizada (dd/mm/aaaa) estou cursando o segundo semestre de Ciência da Computação pela UFPel. Caso interesse, toda minha formação está no meu perfil do LinkedIn.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Esta aplicação se resume em um CRUD utilizando React.js no frontend, utilizando apenas HTML e CSS na estilização. Já no backend, a aplicação roda em Node.js, utilizando Express para o gerenciamento das requisições HTTP e com um banco de dados MongoDB Atlas.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Espero que gostem.</p>
                    </div>
                    <footer>
                    <div className="actions">
                        <a href="https://github.com/FredDsR" target="blank">
                            <img src={github} alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/in/frederico-reckziegel/" target="blank">
                            <img src={linkedin} alt=""/>
                        </a>
                    </div>
                    </footer>
                </article>
            </section> 
        );
    }
}

export default Start;