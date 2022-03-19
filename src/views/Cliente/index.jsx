import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function Index() {
    const [cliente, setCliente] = useState([]);

    const getAllCliente = () => {
        ClienteService.getAllCliente().then((response)=> {
            setCliente(response.data);
            console.log(response.data)
        }).catch((error)=> {
            console.log(error);
        });
    }
    useEffect(() => {
        getAllCliente();
    }, [])

    const deleteCliente = (id_cliente) => {
        ClienteService.deleteCliente(id_cliente).then((response)=>{
            getAllCliente(id_cliente);
        })
    }
    
    

    return (
        <main>
            <div className="table-responsive-sm">
                <br/>
            <Link to="/Cliente-Create" className="btn btn-warning">Cadastrar cliente</Link>
            <table id="example" className="display dataTable dtr-inline table table-hover" cellspacing="0" width="100%" role="grid" aria-describedby="example_info" style={{width:"100%", tableLayout:"fixed"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Cpf</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cliente.map((cliente)=> (
                        <tr key= {cliente.id_cliente}>
                        <td>{cliente.id_cliente}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.idade}</td>
                        <td>{cliente.cpf}</td>
                        <td>{cliente.email}</td>
                        <td>
                            <Link to={`/Cliente-Update/${cliente.id_cliente}`} className="btn btn-info">Editar</Link>
                            <button className="btn btn-danger" onClick={()=> deleteCliente(cliente.id_cliente)}>Deletar</button>
                        </td>
                    </tr>
                    ))
                    
}
                </tbody>
            </table>
          
        </div>
        </main>
    );
}