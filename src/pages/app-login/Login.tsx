import * as React from 'react';
import './Login.css'
import { useState, useEffect } from 'react'
import Input from './inputs'
import {Routes, Route, useNavigate} from 'react-router-dom';


const Login = () => {
    const [card, setCard] = useState('')
    const [newType, setNewType] = useState('password')
    const navigate = useNavigate();
    //informações de usuário para login
    const [UsuarioLog, setUsuarioLog] = useState('');
    const [SenhaLog, setSenhaLog] = useState('');
    //informaçoes do usuario de cadastro
    const [Senha, setSenha] = useState('');
    const [Nome, setNome] = useState('');
    const [Usuario, setUsuario] = useState('');
    const [ConfirmaSenha, setConfirmaSenha] = useState('');
    // formulario
    const [validUser, setvalidUser] = useState([{'Nome':'sharenergy', 'Usuario': 'sharenergy', 'Senha':'sh@r3n3rgy'}])

    const toggleCard = () => {
        setCard((corr) => (corr === "" ? "hide" : ""))
    }
    const toggleSenha = (e:any) => {
        setNewType((corr) => (corr === "password" ? "text" : "password")),
        e.target.parentNode.parentNode.firstChild.type = newType
    }
    useEffect(() => {
        try {
            JSON.parse(localStorage.getItem('listaUser')).Usuario = 'sharenergy'
        } catch (error) {
            localStorage.setItem('listaUser', JSON.stringify(validUser))
        }
    }, []);

    const cadastrar = () =>{
        let listaUser = JSON.parse(localStorage.getItem('listaUser'))

        if( Nome && Usuario && Senha == ConfirmaSenha){
            setvalidUser(validUser.concat({'Nome':Nome, 'Usuario': Usuario, 'Senha':Senha}))
            listaUser.forEach((item:any) => {
                if (item.Usuario == Usuario){
                    alert('Usuario já cadastrado')
                } else{
                    localStorage.setItem('listaUser', JSON.stringify(validUser)),
                    alert('Usuário cadastrado com sucesso')
                }
            })
            toggleCard()

        }  else {
            alert('Preencha todos os campos')
        }
    }

    const logar = () =>{
        let mathRandom = Math.random().toString(16)
        let token = mathRandom + mathRandom

        let listaUser = JSON.parse(localStorage.getItem('listaUser'))
        listaUser.forEach((item:any) => {
            if (item.Usuario == UsuarioLog && item.Senha == SenhaLog){
                alert('Logado com sucesso'),
                
    
                localStorage.setItem('token', token),
                localStorage.setItem('userLogado', JSON.stringify(UsuarioLog)),
                navigate('/');
                window.location.reload()
            }
         })
    }
    
    return (
        <div className='app-login'>
            <div className={!card + ' card-cadastro'}>
                <h1 className="form-title"> Cadastrar </h1>

                <Input
                    name = 'Nome'
                    type = 'text'
                    onChange = {(e:{target: HTMLInputElement}) =>{
                        {e.target.value.length >= 3 ? (setNome(e.target.value), e.target.className = '') : e.target.className = 'error'}
                        
                    }}
                />
                <Input
                    name = 'Usuario'
                    type = 'text'
                    onChange = {(e:{target: HTMLInputElement})=>{
                        {e.target.value.length >= 3 ? (setUsuario(e.target.value), e.target.className = '') : e.target.className = 'error'}
                    }}
                />
                <Input
                    name = 'Senha'
                    type = 'password'
                    onChange = {(e:{target: HTMLInputElement})=>{
                        (e.target.value.length >= 6 ? (setSenha(e.target.value), e.target.className = '') : e.target.className = 'error')
                    }}
                    svg = 'versenha'
                    onClick = {toggleSenha}
                />
                <Input
                    name = 'Confirmar Senha'
                    type = 'password'
                    onChange = {(e:{target: HTMLInputElement}) =>{
                        {e.target.value == Senha ? (
                            setConfirmaSenha(e.target.value), e.target.className = ''
                        ) : e.target.className = 'error'}
                        
                    }}
                    svg = 'versenha'
                    onClick = {toggleSenha}
                />

                <div className='justify-center'>
                    <button className="cadastro-button" onClick={cadastrar}>
                    <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Cadastrar
                    </button>
                </div>

                <div className="justify-center login-text">Já tem uma conta? 
                    <button className='trocar-login' onClick={toggleCard}>Entrar</button>
                </div>

            </div>

            <div className={card + ' card-login'}>
                <h1 className='form-title'> Entrar </h1>

                <Input
                    name = 'UsuarioLog'
                    type = 'text'
                    onChange = {(e:{target: HTMLInputElement}) =>{
                        setUsuarioLog(e.target.value)
                    }}
                />

                <Input
                    name = 'SenhaLog'
                    type = 'password'
                    svg = 'versenha'
                    onChange = {(e:{target: HTMLInputElement}) =>{
                            setSenhaLog(e.target.value)
                        }}
                />

                <div className="label-lembrar">
                    <label id="labelConfirmSenha" htmlFor="lembrarSenha">Lembrar senha?</label>
                    <input type="checkbox" id="lembrarSenha"/>
                </div>

                <div className='justify-center'>
                    <button className="cadastro-button" onClick={logar}>
                    <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Entrar
                    </button>
                </div>


                <div className="justify-center login-text">Não tem uma conta? 
                <button className='trocar-login' onClick={toggleCard}>Cadastre-se</button></div>

            </div>
        </div>

    )
}

export default Login;