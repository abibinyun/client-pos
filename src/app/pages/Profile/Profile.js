import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userProfileAction from "../../redux/profile/profileAction";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");

    if (loggedInUser) {
      dispatch(userProfileAction.fetchProfile());
    }

    // eslint-disable-next-line
  }, []);

  const { user } = useSelector((state) => state.userProfile);

  if (user === null) {
    return <div>Loading</div>;
  }

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <div>
      <div>
        <div>
          <Card
            style={{
              width: "18rem",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5rem",
            }}
          >
            <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>Full Name: {user.full_name}</Card.Text>
              <Card.Text>Email : {user.email}</Card.Text>
              <Button variant="primary" onClick={logout} type="submit">
                Logout
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
