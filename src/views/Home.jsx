import React from "react";

export default function Home() {
    return (
        <div id="fundo">
            <div className="jumbotron"><br/><br/>
                <h1 className="font-weight-bold"style={{textAlign:"center",color:"black"}}><strong>World</strong></h1>
                <br/>

                <h2 style={{textAlign:"center",color:"black"}}>Sua agência de viagem!</h2>
                <br/><br/>

                    <p className="text" style={{color:"black"}}>Aproveite as férias! Viagem com estilo e conforto para todo o Brasil e sem pagar muito por isso. Embarque em uma viagem de aventura e com a segurança da nossa agência World. Temos os melhores destinos para você e sua família. A World, localizada na Av.Paulista, número 100 em sua cidade. Entre em contato pelo whatsapp: 11 95211 8452. 
                    Saiu de férias procure a World.</p>
                    <br/><br/><br/><br/>

                <h1 className="font-weight-bold" style={{color:"black"}}><strong>Quem somos</strong></h1>
                <br/><br/>
                <div className="textinicial" >
                    <p style={{height:"400px", color:"black"}}>A World é uma agência de viagens e operadora turística   nacional.
                    Estamos ligados à fornecedores especialmente selecionados para garantir a qualidade dos serviços aos cliente mais exigentes.<br/>Nossa maior missão é tornar a sua viagem cada vez mais simples, pois nascemos para conectar pessoas a seus sonhos, proporcionando a melhor experiência a um preço acessível.</p>  
                </div>
            </div>    
        </div>  
    );
}