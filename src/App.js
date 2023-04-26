/* eslint-disable react/jsx-no-undef */
import './App.css';
import Profile from './profil/profile.js'
import image from './images/cat.png';
import proptypes from "prop-types";


function App() {
  const sayhello=(name)=>{
    alert(`hello ${name}`)
  }
  return (
<div className="App">
  <Profile fullName="Wafa khallfallah" Bio="expert systeme embarqué" Profession="student" sayhello={sayhello}>
     <img src ={image} alt =""/></Profile>
 
</div>
  );}
export default App;

