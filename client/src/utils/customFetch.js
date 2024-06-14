import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://careervista-nv0n.onrender.com/api/v1',
});

export default customFetch;
