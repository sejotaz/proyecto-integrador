import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useLoginForm = () => {
  const { setRemoveUser } = useContext(AppContext);
  const initialValues = {
    username: '',
    password: '',
  };
  const navigate = useNavigate();

  const [user, setUser] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/login', {
        method: 'POST',
        body: formData,
      });

      const dataResponse = await response.json();
      if (response.ok) {
        const userInformation = dataResponse.access_token.split('.')[1];
        const infoToken = JSON.parse(atob(userInformation));
        sessionStorage.setItem('user', JSON.stringify(infoToken));
        setRemoveUser(infoToken);
        navigate("/");
      } else {
        console.log('error', dataResponse.detail);
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return {
    user,
    handleChange,
    handleSubmit,
  };
};
