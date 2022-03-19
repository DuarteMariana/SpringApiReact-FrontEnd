import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function Create() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

  const criarOuEditarCliente = (e) => {
    e.preventDefault();

    const cliente = { nome, idade, cpf, email};
    console.log(cliente)

    if (id) {
        ClienteService.updateCliente(id, cliente)
        .then((response) => {
            navigate("/Cliente")
        })

    } else {
        ClienteService.createCliente(cliente)
        .then((response) => {
            navigate("/Cliente")
        })
    }
  }

  useEffect(() => {
      function getClienteById() {
        if (id) {
            ClienteService.getClienteById(id)
            .then((response) => {
                setNome(response.data.nome);
                setIdade(response.data.idade);
                setCpf(response.data.cpf);
                setEmail(response.data.email);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getClienteById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
          <label htmlFor="idade" className="form-label">Idade</label>
            <input
            type="number"
            id="idade"
            className="form-control"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Cpf" className="form-label">Cpf</label>
            <input
            type="text"
            id="cpf"
            className="form-control"
            placeholder="Cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            />
                    
          </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
            type="email"
            id="email"
            className="form-control"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
                    
            </div>

          <button type="submit" className="btn btn-success" onClick={(e) => criarOuEditarCliente(e)}>
            Enviar
          </button>
          <Link
            to="/Cliente"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}