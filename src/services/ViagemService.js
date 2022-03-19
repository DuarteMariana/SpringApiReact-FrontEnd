import axios from "axios";

const VIAGEM_API_URL="http://localhost:8080/viagens"; 

class ViagemService {

    getAllViagem() {
        return axios.get(VIAGEM_API_URL);
    }
    createViagem(viagem) {
        return axios.post(VIAGEM_API_URL, viagem);
    }
    getViagemById(id) {
        return axios.get(VIAGEM_API_URL + '/' + id);
    }
    updateViagem (id, viagem) {
        return axios.put(VIAGEM_API_URL + '/' + id, viagem);
    }
    deleteViagem (id) {
        return axios.delete(VIAGEM_API_URL + '/' + id);
    }

}

export default new ViagemService();