import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userLoginAction from "../../redux/login/loginAction";

const Login = () => {
  const loginData = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token && token !== "undefined") {
      navigate("/profile");
    }

    // eslint-disable-next-line
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(userLoginAction.login(loginData.email, loginData.password, navigate));
  };

  return (
    <div className="container" onSubmit={loginHandler}>
      <Form style={{ marginTop: "5rem" }}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="bilal@xxxxxx ..." onChange={(e) => dispatch(userLoginAction.setEmail(e.target.value))} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => dispatch(userLoginAction.setPassword(e.target.value))} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <br />
      <p>don't have an account?</p>
      <p>
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
