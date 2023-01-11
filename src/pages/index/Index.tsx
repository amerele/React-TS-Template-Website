import * as React from 'react';
import './index.css'

const Index = () => {
    return(
        <div className='index-container'>
            <div className="img">
                <img src='https://www.sharenergy.com.br/wp-content/uploads/2017/05/logo_color.min-01-01.png'></img>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"> <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/> </svg>
                    <span> Bruno Henrique Gomes</span>
                    <p>Linkedin e Codepen no menu</p>
                </div>
                
            </div>
            <div className="text">
                <p>Funcionalidaes: </p>
                <ul>
                    <li>Login e Cadastro</li>
                    <li>Api Random Dog</li>
                    <li>HTTP Cat</li>
                    <li>Random Users</li>
                    <li>Dark theme (clique na lua)</li>
                    <li>Menu animado</li>
                </ul>
            </div>
        </div>
    )
}

export default Index