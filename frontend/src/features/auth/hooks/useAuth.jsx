import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onloginSubmit = (data) => {
    console.log("Login Data:", data);
  };
  const onregisterSubmit = (data) => {
    console.log("Login Data:", data);
  };
  return {
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    errors,
    onloginSubmit,
    onregisterSubmit,
    navigate,
  };
};
