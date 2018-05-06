import axios from "axios";

const URL = "http://localhost:3001";

export const getMandyMaxPages = () => {
    return axios.get(URL+"/mandy/max-pages");
};
