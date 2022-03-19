import axios from "axios";

const CLIENTES_API_URL="http://localhost:8080/clientes"; 

class ClienteService {

    getAllCliente() {
        return axios.get(CLIENTES_API_URL);
    }
    createCliente(cliente) {
        return axios.post(CLIENTES_API_URL, cliente);
    }
    getClienteById(id_cliente) {
        return axios.get(CLIENTES_API_URL + '/' + id_cliente);
    }
    updateCliente (id_cliente, cliente) {
        return axios.put(CLIENTES_API_URL + '/' + id_cliente, cliente);
    }
    deleteCliente (id_cliente) {
        return axios.delete(CLIENTES_API_URL + '/' + id_cliente);
    }

}

export default new ClienteService();