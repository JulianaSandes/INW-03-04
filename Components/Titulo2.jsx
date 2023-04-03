const Titulo2 = ({nome, paragrafo, cor}) =>{
    //comentário normal

    return(
        <div>
            {/* aqui incluimos o propes */}
            <h1 style={{color : cor}}>Este é o texto de {nome ? nome || false : nome = "Fulano" }</h1>
            {
            paragrafo ? 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda neque ducimus 
                pariatur reiciendis et sequi tenetur adipisci ipsum veniam laborum enim doloremque voluptas, 
                est quae, ratione perferendis provident natus iure. </p>
            :
            <p>Sem texto</p>
            }
        </div>
    )
}

export default Titulo2