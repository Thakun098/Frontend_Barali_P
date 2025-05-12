import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import AuthHeader from "../../common/authHeader";

const getAll = () => {
    return axios.get(`${BASE_URL}/api/accommodation`, { headers: AuthHeader() });
}

const getPromotion = () => {
    return axios.get(`${BASE_URL}/api/accommodation/promotion`)
}
const AccommodationService = {
    getAll,
    getPromotion,
}

export default AccommodationService;

