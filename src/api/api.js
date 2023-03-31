export const aboutMe = async () => {
  const response = await fetch(
    "https://api.react-learning.ru/v2/9-gr/users/me",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );

  if (response.ok === false) {
    const res = await response.json();
    throw new Error(res.message);
  }

  let user = await response.json();
  return user;
};

export const signInFetch = async (values) => {
  const res = await fetch("https://api.react-learning.ru/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (res.ok) {
    const response = await res.json();
    localStorage.setItem("token", response.token);

    return response;
  } else {
    const response = await res.json();
    throw new Error(response.message);
  }
};

export const signUpFetch = async (values) => {
  const res = await fetch("https://api.react-learning.ru/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (res.ok) {
    return true;
  } else {
    const response = await res.json();
    throw new Error(response.message);
  }
};

export const getAllProductsWithSearch = (token, search) => {
  return fetch(
    `https://api.react-learning.ru/products/search?query=${search}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getAllProducts = (token) => {
  return fetch("https://api.react-learning.ru/products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCurrentProduct = (token, id) => {
  return fetch(`https://api.react-learning.ru/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
