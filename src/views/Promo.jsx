import React from "react";
import { Link } from "react-router-dom";

export default function Promo() {
    return (
        <>
        <header>
            <br/>
            <div className="jumbotron card card-image" style={{backgroundColor:"lightskyblue"}}>
                <h1 id="Viagemh1">Confira nossas promoções para esse mês </h1>
                <p id="ViagemP">
                 É o momento de descobrir uma nova aventura.
                </p>
            </div>
        </header>
        <main style={{alingItems:"center"}}>
            <div className="promo">
                <div class="container-fluid" style={{textAlign:"center"}}>
                    <div class="row justify-content-md-center">
                        <div class="col-lg" id="boxForm">
                            <div class="card" style={{width: "40rem"}}>
                                <img class="card-img-top img-responsive" src="./img/1.jpg" alt="Maragogi" />
                            <div class="card-body">
                                <h5 class="card-title">Maragogi</h5>
                                <p class="card-text">Promoção Ida e Volta</p>
                                <Link to="/Viagem-Create" className="btn btn-success">Comprar</Link> 
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg" id="boxForm">
                        <div class="card" style={{width: "40rem"}}>
                            <img class="card-img-top img-responsive" src="./img/2.jpg" alt="Salvador"/>
                        <div class="card-body">
                            <h5 class="card-title">Salvador</h5>
                                <p class="card-text">Promoção Ida e Volta</p>
                                <Link to="/Viagem-Create" className="btn btn-success">Comprar</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg" id="boxForm">
                        <div class="card" style={{width: "40rem"}}>
                            <img class="card-img-top img-responsive" src="./img/3.jpg" alt="Belo Horizonte"/>
                            <div class="card-body">
                                <h5 class="card-title">Belo Horizonte</h5>
                                    <p class="card-text">Promoção Ida e Volta</p>
                                    <Link to="/Viagem-Create" className="btn btn-success">Comprar</Link>
                            </div>
                        </div>
                    </div>
                <div class="col-lg" id="boxForm">
                    <div class="card" style={{width: "40rem"}}>
                        <img class="card-img-top img-responsive" src="./img/4.jpg" alt="Recife" />
                        <div class="card-body">
                            <h5 class="card-title">Recife</h5>
                            <p class="card-text">Promoção Ida e Volta</p>
                            <Link to="/Viagem-Create" className="btn btn-success">Comprar</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </main> 
        
        </>

    
    );
}