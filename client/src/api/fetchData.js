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
