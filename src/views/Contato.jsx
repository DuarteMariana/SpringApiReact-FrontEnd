import React from "react";

export default function Contato() {
    return (
        <>
        <div id="fundo" style={{height:"1000px"}}>
            <div className="container py-3" style={{textAlign:"center"}}>
                <form >
                    <fieldset>
                        <legend>
                        <br/><br/>
                            <h1 className="text-center">Fale Conosco</h1>
                        </legend>
                    <div className="mb-3">
                        <label htmlFor="Nome" className="form-label"/>      
                        <input
                            type="text"
                            id="Nome"
                            className="form-control"
                            placeholder="Nome completo"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"></label>
                        <input
                            type="email"
                            id="idade"
                            className="form-control"
                            placeholder="E-mail"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefone" className="form-label"></label>
                        <input
                            type="text"
                            id="cpf"
                            className="form-control"
                            placeholder="Telefone"/>
                    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"></label>
                        <textarea id="msg" name="msg" class="form-control" placeholder="Descrição" style={{fontSize:"16pt"}}rows="6" cols="25"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Enviar
                    </button>
                    </fieldset>
                </form>
            </div>
        </div>
        
        </>


    );
}