import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key : 'AIzaSyD8D0XlfGHvCP-rL0WabEeA-AmkQBXCyh8',
    cx : '2746d6eef0d9741dc'
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    });
    return data;
};
