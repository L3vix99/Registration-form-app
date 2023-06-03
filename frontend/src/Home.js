import React, {useState} from 'react';
import "./main.css";
import User from './User/User';
import Form from './components/Form';
import "./App.css";


// const id = Math.floor(Math.random()*2);

const Arr = <p class="text-center">Welcome to our website. 
We will keep you updated on the progress on the home page."</p>;


const Home = () => {

const [news, setNews] = useState([]);

const ClickMainMenu = () =>{
     
        setNews([Arr]); 

}

const ClickScript = () => {
    setNews([<Form />]);
    

}
const ClickUser = () => {
    
    setNews([<User />]) 
    
    
    
}
    return (

        <>
     
        <section></section>
        <nav className='menu'>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" onClick={ClickMainMenu}>Menu</button>
        <button type="button" class="btn btn-primary" onClick={ClickScript}>Fromularz</button>
        <button type="button" class="btn btn-primary" onClick={ClickUser}>Admin</button>
        </div>
        </nav>
        
        <div className='container'>{ClickMainMenu && ClickScript ? news : null}</div>
        
         </>
    )
}


export default Home;
