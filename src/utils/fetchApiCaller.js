export const API_URL = 'https://jsonplaceholder.typicode.com';

export const FILE_UPLOAD_API_URL = 'https://jsonplaceholder.typicode.com';

// import DeviceInfo from 'react-native-device-info';
import {store} from '../store/appStore';

const fetch = window.fetch;

export default async function callApi(endpoint, method = 'get', body) {
  const token = store.getState().appReducer.token;

  let options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      //   deviceid: `${DeviceInfo.getModel()}`,
      authorization: `${token}`,
    },
    method,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  console.log(' url   ', `${API_URL}/${endpoint}`);
  return fetch(`${API_URL}/${endpoint}`, options)
    .then(response =>
      response.json().then(data => ({status: response.status, ...data})),
    )
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
}
