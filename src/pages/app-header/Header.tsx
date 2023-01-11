import './Header.css'
import { useState, useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {

  const [menu, setMenu] = useState('')
  const toggleMenu = () => {
    setMenu((corr) => (corr === "ativo" ? "" : "ativo"))
  }

  const [User, setUser] = useState();
  const navigate = useNavigate();
  const deslogar = () => {
    localStorage.setItem('token', ''),
    localStorage.setItem('userLogado', ''),
    window.location.reload()
  }
  useEffect(() => {
    try {
      let login = JSON.parse(localStorage.getItem('userLogado'))
      setUser(login)
    } catch (error) {
      null
    }
  }, []);
  return (
    <div className='app-header'>

      <div className='app-header-left'>
        <div className={menu + " menu-btn"} onClick={toggleMenu}>
          <div className="menu-btn__burguer"></div>
        </div>

        <div className="header-title">
          <Link to={`/`}>SHARENERGY TESTE</Link>
        </div>
        <div className={menu + " sidebar"}>
          <ul>
            <li><a target='new' href='https://github.com/amerele'>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></i>
              Github
            </a></li>
            <li><a target='new' href='https://codepen.io/amerele'>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"> <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" /> </svg></i>
              Codepen
            </a></li>
          </ul>
        </div>

      </div>
      {User ? (
        <>
          <div className='nav'>
            <Link to={`/kittens`}>HTTPS Cats</Link>
            <Link to={`/puppey`}>Random Dogs</Link>
            <Link to={`/users`}>Usuarios</Link>
          </div>
          
          <button className='user deslogar' onClick={deslogar}>
            <span>Olá, {User}</span>
            <Link to={`/login`} className='name-user'>Deslogar</Link>
          </button>
        </>
      ) : (
        <div className='app-header-right'>
          <button className='user'>
            <Link to={`/login`} className='name-user'>Login</Link>
          </button>
        </div>
      )}


    </div>
  )
}

export default Header
