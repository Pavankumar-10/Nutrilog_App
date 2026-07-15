import { useState } from "react";
import "../Styles/Register.css";
import { addUser } from "../Services/UserServices";

function Register() {

    const [user, setUser] = useState({
        fname: "",
        mname: "",
        lname: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    // Regular Expressions
    const regex = {
        fname: /^[A-Za-z]{2,30}$/,
        mname: /^[A-Za-z]*$/,
        lname: /^[A-Za-z]{2,30}$/,
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        phone: /^[6-9][0-9]{9}$/,
        age: /^(1[0-9]|[2-9][0-9]|100)$/,
        password:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
    };

    const validateField = (name, value) => {

        let error = "";

        switch (name) {

            case "fname":

                if (!value.trim())
                    error = "First Name is required";

                else if (!regex.fname.test(value))
                    error = "Only alphabets allowed (2-30 characters)";

                break;

            case "mname":

                if (value && !regex.mname.test(value))
                    error = "Only alphabets allowed";

                break;

            case "lname":

                if (!value.trim())
                    error = "Last Name is required";

                else if (!regex.lname.test(value))
                    error = "Only alphabets allowed";

                break;

            case "email":

                if (!value.trim())
                    error = "Email is required";

                else if (!regex.email.test(value))
                    error = "Enter valid Email";

                break;

            case "phone":

                if (!value.trim())
                    error = "Phone Number is required";

                else if (!regex.phone.test(value))
                    error = "Enter valid 10 digit mobile number";

                break;

            case "age":

                if (!value)
                    error = "Age is required";

                else if (!regex.age.test(value))
                    error = "Age should be between 10 and 100";

                break;

             case "address":

                  if (!value.trim())
                      error = "Address is required";

                break;

            case "password":

                if (!value.trim())
                    error = "Password is required";

                else if (!regex.password.test(value))
                    error =
                        "Minimum 8 characters with Uppercase, Lowercase, Number & Special Character";

                break;

            case "confirmPassword":

                if (!value.trim())
                    error = "Confirm Password is required";

                else if (value !== user.password)
                    error = "Passwords do not match";

                break;

            default:
                break;
        }

        setErrors(prev => ({
            ...prev,
            [name]: error
        }));

        return error === "";
    };

    const validateForm = () => {

        const validations = [
            validateField("fname", user.fname),
            validateField("mname", user.mname),
            validateField("lname", user.lname),
            validateField("email", user.email),
            validateField("phone", user.phone),
            validateField("age", user.age),
            validateField("address", user.address),
            validateField("password", user.password),
            validateField("confirmPassword", user.confirmPassword)
        ];

        return validations.every(Boolean);
    };
    // Handle Input Change
const handleChange = (e) => {

    const { name, value } = e.target;

    setUser(prev => ({

        ...prev,

        [name]: value

    }));

    validateField(name, value);

};

// Handle Register
const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) {

        return;

    }

    try {

        const userData = {

            fname: user.fname,
            mname: user.mname,
            lname: user.lname,
            email: user.email,
            phone: user.phone,
            age: user.age,
            address: user.address,
            password: user.password

        };

        const response = await addUser(userData);

        console.log(response.data);

        alert("Registration Successful");

        setUser({

            fname: "",
            mname: "",
            lname: "",
            email: "",
            phone: "",
            age: "",
            address: "",
            password: "",
            confirmPassword: ""

        });

        setErrors({});

    }

    catch (error) {

        console.error(error);

        alert("Registration Failed");

    }

};
return (

<div className="register-container">

<div className="register-card">

<h1>🥗 Nutri-Log</h1>

<h2>Create Account</h2>

<p>

Join Nutri-Log and start your healthy journey.

</p>

<form onSubmit={handleSubmit} noValidate>
<div className="form-group">

<input

type="text"

name="fname"

placeholder="Enter First Name"

value={user.fname}

onChange={handleChange}

/>

{errors.fname &&
<p className="error">
{errors.fname}
</p>}

</div>
<div className="form-group">

<input

type="text"

name="mname"

placeholder="Enter Middle Name"

value={user.mname}

onChange={handleChange}

/>

{errors.mname &&
<p className="error">
{errors.mname}
</p>}

</div>
<div className="form-group">

<input

type="text"

name="lname"

placeholder="Enter Last Name"

value={user.lname}

onChange={handleChange}

/>

{errors.lname &&
<p className="error">
{errors.lname}
</p>}

</div>
<div className="form-group">

    <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={handleChange}
    />

    {errors.email &&
        <p className="error">
            {errors.email}
        </p>
    }

</div>
<div className="form-group">

    <input
        type="text"
        name="phone"
        placeholder="Enter Phone Number"
        value={user.phone}
        onChange={handleChange}
    />

    {errors.phone &&
        <p className="error">
            {errors.phone}
        </p>
    }

</div>
<div className="form-group">

    <input
        type="text"
        name="age"
        placeholder="Enter Age"
        value={user.age}
        onChange={(e) => {

            const value = e.target.value;

            if (/^\d*$/.test(value)) {

                handleChange(e);

            }

        }}
    />

    {errors.age &&
        <p className="error">
            {errors.age}
        </p>
    }

</div>
<div className="form-group">

    <input
        type="text"
        name="address"
        placeholder="Enter Address"
        value={user.address}
        onChange={handleChange}
    />

    {errors.address &&
        <p className="error">
            {errors.address}
        </p>
    }

</div>
<div className="form-group">

    <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={user.password}
        onChange={handleChange}
    />

    {errors.password &&
        <p className="error">
            {errors.password}
        </p>
    }

</div>
<div className="form-group">

    <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={user.confirmPassword}
        onChange={handleChange}
    />

    {errors.confirmPassword &&
        <p className="error">
            {errors.confirmPassword}
        </p>
    }

</div>
<button type="submit">

    Register

</button>

</form>

</div>

</div>

);

}

export default Register;