import { useState } from "react";
import Registration from "./Registration";
import { useHistory } from "react-router-dom";

const RegistrationContainer = () => {
  const history = useHistory();

  const initialUserObj = {
    name: "",
    email: "",
    phone: "",
  };
  const [user, setUser] = useState(initialUserObj);

  const initialErrorObj = {
    nameError: "",
    emailError: "",
    phoneError: "",
  };

  const [error, setError] = useState(initialErrorObj);
  const emailRegexp = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const phoneRegexp = RegExp(/^([0|\+[0-9]{1,5})?([0-9]{10})$/);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setError({
          ...error,
          nameError: value.length === 0 && "Name Required",
        });
        break;
      case "email":
        setError({
          ...error,
          emailError: value.length === 0 && "Email Required",
          // emailError:
          //   value.length === 0
          //     ? "Email Required"
          //     : emailRegexp.test(value)
          //     ? ""
          //     : "Invalid Email",
        });
        break;
      case "phone":
        setError({
          ...error,
          phoneError: value.length === 0 && "Phone Number Required",
          // : phoneRegexp.test(value)
          // ? ""
          // : "Invalid Phone Number",
        });
        break;
      default:
        break;
    }
    setUser({ ...user, [name]: value });
  };

  const registerUser = () => {
    let isValid = true;

    if (user.name === "" || user.email === "" || user.phone === "") {
      isValid = false;
      setError({
        nameError: user.name === "" ? "Name Required" : "",
        emailError: user.email === "" ? "Email Required" : "",
        phoneError: user.phone === "" ? "Phone Number Required" : "",
      });
    }

    if (error.nameError && error.emailError && error.phoneError) {
      isValid = false;
    }

    if (isValid) {
      let users = JSON.parse(localStorage.getItem("Users"));
      user.id = JSON.parse(localStorage.getItem("Users")).length + 1;
      users.push(user);
      localStorage.setItem("Users", JSON.stringify(users));
      setUser(initialUserObj);
      history.goBack();
    }
  };

  return (
    <Registration
      user={user}
      error={error}
      handleInputChange={handleInputChange}
      registerUser={registerUser}
    />
  );
};

export default RegistrationContainer;
