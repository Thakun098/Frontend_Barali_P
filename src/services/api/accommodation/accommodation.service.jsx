import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import AuthHeader from "../../common/AuthHeader";

const getSearch = (checkIn, checkOut, guests) => {
    // console.log("getSearch", destination, checkIn, checkOut, guest);
    return axios.get(`${BASE_URL}/api/accommodation/search`, {
        params: {
            checkIn,
            checkOut,
            guests,
            selectedTypes: [],
        }
    });
};



const getPopularAccommodation = () => {
    
    return axios.get(`${BASE_URL}/api/accommodation/popular`);
};

const getAll = () => {
    return axios.get(`${BASE_URL}/api/accommodation`, { headers: AuthHeader() });
}

const getPromotion = () => {
    return axios.get(`${BASE_URL}/api/accommodation/promotion`)
}
const AccommodationService = {
    getAll,
    getPromotion,
    getPopularAccommodation,
    getSearch,
}

export default AccommodationService;

