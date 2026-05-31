import { axiosClient } from "@/src/infrastructure/http/axios-client";
import { API_ENDPOINT } from "@/src/shared/constants/api";
import { useCallback, useState } from "react";

function UseLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axiosClient.post(API_ENDPOINT.auth.user_login, {
        email,
        password,
      });
      return res.data;
    } catch (err: any) {
      alert(err.response?.data?.message || "An error occurred");
    }
  }, [email, password]);
  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
  };
}

export default UseLogin;
