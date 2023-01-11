import axios from "axios"
import { useState, useEffect } from 'react';
import './puppey.css'

const RandomDog = () => {
    const [doggo, setDoggo] = useState<any>('')

    const getDoggo = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            const data = response.data
            setDoggo(data)
    } catch (error) {
        console.log(error)
    };
}
    useEffect(() => {
        getDoggo();
    }, []);

    return (
        <div className="dog-container">
            <h1>doggo</h1>
            {doggo.length === 0 ? <center>Loading...</center> : (
                <img src={doggo.message} alt="cute-dog" className="dog-pic"/>
            ) }
            <br/>
            <button onClick={getDoggo} className="getDoggo">
                <span></span>
                get another doggo
            </button>
        </div>
    )
}
export default RandomDog