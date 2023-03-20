
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

  export const signIn = async (values) => {
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
  
      return true;
    } else {
      const response = await res.json();
      throw new Error(response.message);
    }
  };
  export const getAllProducts = async () => {
    let response = await fetch("https://api.react-learning.ru/products", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  
    if (response.ok === false) {
      const res = await response.json();
      throw new Error(res.message);
    }
  
    let positions = await response.json();
    return positions.products;
  };

  export const signup = async (values) => {
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

  export const AuthMe= async () => {
    if (localStorage.getItem("token") === undefined) {
      return false;
    }
  
    try {
      let response = await fetch(
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
        return false;
      }
  
      return true;
    } catch (error) {
      return false;
    }
  };

  export const getSomeProduct = async (productID) => {
    let response = await fetch(
      `https://api.react-learning.ru/products/${productID}`,
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
  
    let product = await response.json();
    return product;
  };