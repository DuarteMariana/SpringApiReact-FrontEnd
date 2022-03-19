
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ViagemService from "../../services/ViagemService";

export default function Index() {
    const [viagem, setViagem] = useState([]);

    const getAllViagem = () => {
        ViagemService.getAllViagem().then((response)=> {
            setViagem(response.data);
            console.log(response.data)
        }).catch((error)=> {
            console.log(error);
        });
    }
    useEffect(() => {
        getAllViagem();
    }, [])

    const deleteViagem = (id) => {
        ViagemService.deleteViagem(id).then((response)=>{
            getAllViagem(id);
        })
    }
    
    

    return (
        <div className="table-responsive-sm">
            <br/>
            <Link to="/Viagem-Create" className="btn btn-warning">Cadastrar viagem</Link>
            <table id="example" className="display dataTable dtr-inline table table-hover" cellspacing="0" width="100%" role="grid" aria-describedby="example_info" style={{width:"100%", tableLayout:"fixed"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Destino</th>
                        <th>Data de ida</th>
                        <th>Data de volta</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody >
                {
                    viagem.map((viagem)=> (
                        <tr key= {viagem.id} >
                        <td >{viagem.id}</td>
                        <td >{viagem.destino}</td>
                        <td >{viagem.ida}</td>
                        <td >{viagem.volta}</td>
                        <td>
                            <Link to={`/Viagem-Update/${viagem.id}`} className="btn btn-info">Editar</Link>
                            <button className="btn btn-danger" onClick={()=> deleteViagem(viagem.id)} >Deletar</button>
                        </td>
                    </tr>
                    ))
                    
}
                </tbody>
            </table>
          
        </div>
    );
}