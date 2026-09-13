import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
export const useAuth = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const loginSubmit = (data) => {
    console.log("Login Data:", data);
  };
  const registerSubmit = (data) => {
    console.log("Register Data:", data);
  };
  const password = watch("password", "");
  const getPasswordStrength = () => {
    if (!password) return 0;

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    return strength;
  };

  const strength = getPasswordStrength();

  return {
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    errors,
    loginSubmit,
    navigate,
    watch,
    registerSubmit,
    password,
    getPasswordStrength,
    strength,
  };
};
