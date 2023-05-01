const BASE_URL = "http://localhost:3001";

export const fetchCategories = async () => {
  try {
    const res = await fetch(`${BASE_URL}/categories`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Error occured: ${err}`);
  }
};

export const fetchCoinsByCategory = async (queryString) => {
  try {
    const res = await fetch(`${BASE_URL}/coins?${queryString}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Error occured: ${err}`);
  }
};

export const fetchCoinById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/coins/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Error occured: ${err}`);
  }
};
