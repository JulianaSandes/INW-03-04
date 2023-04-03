import Titulo2 from "./Components/Titulo2"

function App(){
  return(
    <div>
      <h1>Inicio</h1>
      <Titulo2 nome = "Juliana Sandes" paragrafo = {true} cor = "#f542f5"/>
      <Titulo2/>
      <Titulo2 paragrafo={true}/>
      <Titulo2 nome = "Joaquina" cor = "#750275"/>
    </div>
    
  )
}

export default App
