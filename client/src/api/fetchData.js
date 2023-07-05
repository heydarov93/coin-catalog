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

export const fetchCoinsBySearch = async (searchDetails) => {
  try {
    const res = await fetch(`${BASE_URL}/search`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(searchDetails),
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(`Error occured: ${err}`);
  }
};

export const fetchSomeColumns = async (url) => {
  try {
    const res = await fetch(`${BASE_URL}/${url}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Error occured: ${err}`);
  }
};

export const fetchDenominationUnits = async (queryString) => {
  try {
    const res = await fetch(
      `${BASE_URL}/coins/denomination/units?s=${queryString}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error occured:\nFetch denomination unit:\n", err);
  }
};

export const addNewCoin = async (coinData) => {
  try {
    const res = await fetch(`${BASE_URL}/add-coin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(coinData),
    });
  } catch (err) {
    console.error("Error occured:\nAdd coin:\n", err);
  }
};

export const updateCoin = async (coinData, coinID) => {
  try {
    const res = await fetch(`${BASE_URL}/update-coin/${coinID}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(coinData),
    });
  } catch (err) {
    console.error("Error occured:\nUpdate coin:\n", err);
  }
};

export const deleteCoin = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/delete/${id}`, {
      method: "DELETE",
    });
    const info = await response.json();
    return info;
  } catch (err) {
    console.error("Error occured:\nDelete coin:\n", err);
  }
};
