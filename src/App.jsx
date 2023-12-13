
import { useEffect } from 'react'
import './App.css'
import Tarjeta from './componentes/Tarjeta.jsx'

/* const DEF_TARJETA=<Tarjeta
key={"def key"}
/> */
function App() {
 /* const [nacimientos,setNacimientos]=useState([DEF_TARJETA]) */
  useEffect(()=>{
    console.log("Effect")
  
async function pedirNacimientos(){
  const res=await fetch ("http://localhost:3000/nacimientos/");
  let nacimientos="def producto"
  if(res.ok){
    nacimientos=await res.json();
    console.log(nacimientos);
    /* nacimientos.forEach(nacimiento => {
      
    }); */
  }
}
 pedirNacimientos()
  return()=>{
    console.log("Limpiando efecto")}
  },[]);

 
  return (
    <>
      <Tarjeta></Tarjeta>
    </>
  )

}

export default App
