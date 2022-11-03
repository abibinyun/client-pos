import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userRegisterAction from "../../redux/register/registerAction";

const Register = () => {
  const registerData = useSelector((state) => state.userRegister);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userRegisterAction.resetForm());

    let token = localStorage.getItem("token");
    if (token && token !== "undefind") {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(userRegisterAction.register(registerData.fullname, registerData.email, registerData.password, navigate));
  };

  return (
    <div className="container" onSubmit={handleRegister}>
      <Form style={{ marginTop: "5rem" }}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Muhammad bilal ..." onChange={(e) => dispatch(userRegisterAction.setFullName(e.target.value))} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="bilal@xxxxxx ..." onChange={(e) => dispatch(userRegisterAction.setEmail(e.target.value))} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="@Qwerty123" onChange={(e) => dispatch(userRegisterAction.setPassword(e.target.value))} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <br />
      <p>already have an account?</p>
      <p>
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
