import axios from 'axios';

const API_URL =
  'https://medic-delivery-app-default-rtdb.europe-west1.firebasedatabase.app';
const API_FIREB = 'AIzaSyAj-Zbx2MFCukdvQq2XoOQVnV2MBYKniOg';

const GOOGLE_API_KEY = 'AIzaSyAUj3Qur_NFCB-mhi6TL6M8JCFXWxQI2V8';

export const getDrug24 = async () => {
  try {
    const response = await fetch(`${API_URL}/drug24.json?auth=${API_FIREB}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const getEDrug = async () => {
  try {
    const response = await fetch(`${API_URL}/e-drug.json?auth=${API_FIREB}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const getMedical = async () => {
  try {
    const response = await fetch(`${API_URL}/medical.json?auth=${API_FIREB}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const getPharmacy = async () => {
  try {
    const response = await fetch(`${API_URL}/pharmacy.json?auth=${API_FIREB}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const getStayWell = async () => {
  try {
    const response = await fetch(`${API_URL}/staywell.json?auth=${API_FIREB}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const addItemsToDB = data => {
  axios.post(`${API_URL}/userData.json`, data);
};

export const getOrderInfo = async () => {
  const orderInfo = await fetch(`${API_URL}/userData.json?auth=${API_FIREB}`);
  const res = await orderInfo.json();

  return res;
};

//-------------GOOGLE MAP API
export const searchAddress = async data => {
  if (!data.trim()) {
    throw new Error('Address is required');
  }
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        data
      )}&key=${GOOGLE_API_KEY}`
    )
    .then(res => {
      return res;
    })
    .catch(err => {
      throw err;
    });
};
