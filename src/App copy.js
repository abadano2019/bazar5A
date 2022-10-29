
import './sass/App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Counter from './components/Counter';
import ButtonCart from './components/ButtonCart';
import { UserLayout } from './components/UserLayout';



import { GrAdd } from 'react-icons/gr';
import { VscChromeMinimize } from 'react-icons/vsc';

import { useState } from 'react';

function App() {
  
    const[contador, setContador] = useState(0);

    const handleAdd = () =>{
      setContador(contador + 1);
    }

    const handleSubtract = () =>{
      setContador(contador - 1);
    }
  

  
  return (
    <div className="App">
        <UserLayout>
        
        <ItemListContainer greeting= "Bienvenido a Bazar 5A" contador = {contador} />
        <button onClick = {()=>handleAdd()}>Sumar</button>
        <span>{contador}</span>
        <button onClick = {()=>handleSubtract()}>Restar</button>
        <Counter />

        <ButtonCart leftIcon = {GrAdd} rightIcon = {VscChromeMinimize}> {contador} </ButtonCart>
        </UserLayout>
    </div>
  );
}

export default App;
