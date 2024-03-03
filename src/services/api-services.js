export const getDrug24 = async () => {
  try {
    const response = await fetch(
      'https://medic-delivery-app-default-rtdb.europe-west1.firebasedatabase.app/drug24.json'
    );
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
    const response = await fetch(
      'https://medic-delivery-app-default-rtdb.europe-west1.firebasedatabase.app/e-drug.json'
    );
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
    const response = await fetch(
      'https://medic-delivery-app-default-rtdb.europe-west1.firebasedatabase.app/medical.json'
    );
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
    const response = await fetch(
      'https://medic-delivery-app-default-rtdb.europe-west1.firebasedatabase.app/pharmacy.json'
    );
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
    const response = await fetch(
      'https://medic-delivery-app-default-rtdb.europe-west1.firebasedatabase.app/staywell.json'
    );
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
