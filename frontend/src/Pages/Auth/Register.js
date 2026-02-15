// SignupPage.js
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./auth.css";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from "../../utils/ApiRequest";
import axios from "axios";

const Register = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('user')){
      navigate('/');
    }
  }, [navigate]);

  const [values, setValues] = useState({
    name : "",
    email : "",
    password : "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }

  const handleChange = (e) => {
    setValues({...values , [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

      const {name, email, password} = values;

      setLoading(false);
     
      const {data} = await axios.post(registerAPI, {
        name,
        email,
        password
      });

      if(data.success === true){
        delete data.user.password;
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(data.message, toastOptions);
        setLoading(true);
        navigate("/");
      }
      else{
        toast.error(data.message, toastOptions);
        setLoading(false);
      }
    };

  return (
  <>
    <Container className="mt-5">
      <Row>
        <h1 className="text-center text-primary">
          <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />
        </h1>
        <h1 className="text-center text-light">Expense Tracker</h1>

        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center text-light mt-4">Registration</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-3">
              <Form.Label className="text-light">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full name"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center mt-4">
              <Button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Signup"}
              </Button>

              <p className="mt-3 text-secondary">
                Already have an account?{" "}
                <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  </>
);
}

export default Register