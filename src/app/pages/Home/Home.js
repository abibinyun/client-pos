import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button/Button";
import CardProduct from "../../components/CardProduct/CardProduct";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggin, setIsLoggin] = useState(true);

  const token = localStorage.getItem("token");

  if (!token === "undefined") {
    setIsLoggin(false);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-start" style={{ marginLeft: "10px" }}>
        {isLoggin ? (
          <div></div>
        ) : (
          <div>
            <ButtonComponent onClick={handleLogin}>Login</ButtonComponent>
          </div>
        )}
      </div>
      <CardProduct />
    </div>
  );
};

export default Home;
