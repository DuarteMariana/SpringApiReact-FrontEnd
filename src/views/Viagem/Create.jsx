import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ViagemService from "../../services/ViagemService";

export default function Create() {
    const [destino, setDestino] = useState("");
    const [ida, setIda] = useState("");
    const [volta, setVolta] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const cadastrarOuEditarViagem = (e) => {
        e.preventDefault();

        const viagem = { destino, ida, volta};

        if (id) {
            ViagemService.updateViagem(id, viagem)
            .then((response)=> {
                navigate("/Viagem")
            })

        }else {
            ViagemService.createViagem(viagem).then((response) => {
                navigate("/Viagem")
                console.log(viagem)
            })
        }
    }
    useEffect(()=> {
        function getViagemById(){
            if (id) {
                ViagemService.getViagemById(id)
                .then((response) => {
                    setDestino(response.data.destino);
                    setIda(response.data.ida);
                    setVolta(response.data.volta);
                })
                .catch((error)=> {
                    console.log(error);
                })
            }
        }
        getViagemById()
    }, [id]);


    return (
        <div className="container py3">
            <form>
                <fieldset>
                    <legend>
                    <h2 className="text-center"> 
                        {id ? "Editar" : "Criar"}
                    </h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="destino" className="form-label">Destino</label>
                        <input
                            type="text"
                            id="destino"
                            className="form-control"
                            placeholder="Destino"
                            value={destino}
                            onChange={(e) => setDestino(e.target.value)}
                        />
                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="ida" className="form-label">Data de Ida</label>
                        <input
                            type="text"
                            id="ida"
                            className="form-control"
                            placeholder="Ex: 01/01/1001"
                            value={ida}
                            onChange={(e) => setIda(e.target.value)}
                        />
                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="volta" className="form-label">Data de volta</label>
                        <input
                            type="text"
                            id="volta"
                            className="form-control"
                            placeholder="Ex: 01/01/1001"
                            value={volta}
                            onChange={(e) => setVolta(e.target.value)}
                        />
                    
                    </div>
                    <button type="submit" className="btn btn-success" onClick={(e) => cadastrarOuEditarViagem(e)}>Enviar</button>
                    <Link to="/Viagem" className="btn btn-danger" style={{marginLeft:"10px"}}>
                    Cancelar
                    </Link>
                    <br/>
                    <br/>
                </fieldset>
            </form>
        </div>
    );
}