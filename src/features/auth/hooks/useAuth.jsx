import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export let useAuth = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      staySignedIn: false,
    },
  });

  const onLoginSubmit = (data) => {
    console.log("Login Submitted:", data);
    reset();
  };
  const onRegisterSubmit = (data) => {
    console.log("Register Submitted:", data);
    reset();
  };
  return {
    register,
    handleSubmit,
    errors,
    onLoginSubmit,
    onRegisterSubmit,
    navigate,
  };
};
