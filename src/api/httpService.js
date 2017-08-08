import axios from 'axios';
export default function sendRequest(apiRequestURL) {
    return new Promise((resolve) => {
        axios.get(apiRequestURL).then(res => {
            resolve(res.data.data);
      });
    });
}