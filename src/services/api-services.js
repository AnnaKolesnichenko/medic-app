import axios from 'axios';

const API_URL =
  'https://medic-delivery-app-default-rtdb.europe-west1.firebasedatabase.app';

export const getDrug24 = async () => {
  try {
    const response = await fetch(`${API_URL}/drug24.json`);
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
    const response = await fetch(`${API_URL}/e-drug.json`);
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
    const response = await fetch(`${API_URL}/medical.json`);
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
    const response = await fetch(`${API_URL}/pharmacy.json`);
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
    const response = await fetch(`${API_URL}/staywell.json`);
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
