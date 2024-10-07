import axios from 'axios';

export function sendPostRequest(link, dataSent, func) {
  axios
    .post(link, dataSent)
    .then(response => func(response))
    .catch(() => alert('Server error, try again'));
}