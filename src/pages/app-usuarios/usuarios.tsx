import './usuarios.css'
import axios from 'axios'
import * as React from 'react';
import { useState, useEffect } from 'react';


const RandomUsers = () => {
    const [users, setUsers] = useState<any>([])
    const getUsersList = async () => {
        axios.get('https://randomuser.me/api/?results=10').then((res) => {
            setUsers(res.data.results)
            console.log(res.data.results)
        })
    }

    useEffect(() => {
        getUsersList();
    }, []);

    return (
        <div className='users'>
            <div className="users-topo">
                <h1>Lista de usuários cadastrados</h1>
            </div>
            {users.map((user:any) => (
                <div className='User' key={user.id.value}>
                    <div className="img-usr"><img src={user.picture.medium} alt="" /></div>
                    <div className="info">
                        <div className="nome-usr">{user.name.first + ' ' + user.name.last}</div>
                        <div className="username-usr">{user.login.username}</div>
                        <div className="idade-usr">Idade: {user.dob.age}</div>
                        <div className="email-usr">{user.email}</div>
                    </div>

                </div>
            )
            )}
        </div>
    )
}

export default RandomUsers