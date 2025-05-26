import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";
import axios from "axios";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  async function login(email, password, navigate) {
    //we are using navigate here to immediately set the user and navigate him to the landing page
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/auth/v1/login`, {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      setUser(data.user);
      setIsAuth(true);
      setBtnLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
      setBtnLoading(false);
    }
  }

  async function registerUser(name, email, password, role, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/auth/v1/register-user`, {
        name,
        email,
        password,
        role,
      });
      console.log(data);

      localStorage.setItem("token", data.token);
      setBtnLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
      setBtnLoading(false);
    }
  }

  async function fetchUser() {
    try {
      const { data } = await axios.get(`${server}/api/auth/v1/user/me`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setUser(data.user);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        login,
        isAuth,
        setIsAuth,
        setUser,
        login,
        user,
        btnLoading,
        loading,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => useContext(UserContext);
