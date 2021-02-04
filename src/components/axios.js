import axios from 'axios';

const instance  = axios.create({
    baseURL:"https://foods-shop.herokuapp.com/"
});

export default instance;