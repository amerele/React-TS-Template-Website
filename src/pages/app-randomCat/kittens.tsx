import { useState, useEffect, useRef } from 'react';
import './kittens.css'


const HttpKittens = () => {
    const data = useRef<any>();
    const [kitty, setKitten] = useState<any>('')
    const url = 'https://http.cat/'

    const kitten = ()=>{
        (data.current.value.length === 0  ? setKitten(404) : setKitten(data.current.value))
    }

    useEffect(() => {
        kitten();
    }, []);
    
    return (
        <div className='kitty-app'>
            <h1>kitten</h1>
            <img src={url+kitty} className='kitty-img' alt={kitty + ' HTTP cat'} />
            <div className='input-div'>
                <input placeholder='Digite um status HHTP entre 100 e 599' type='number' ref={data} />
                <button id='getKitten'  onClick={kitten}>
                    Get HTTP Cat
                </button>
            </div>
        </div>
        
    )
}
export default HttpKittens