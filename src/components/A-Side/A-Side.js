import { Link, useNavigate } from "react-router-dom";

const ASide = () => {
  const navigate = useNavigate();
  return (
    <nav aria-label="primary navigation" className="dashboard__aside">
      <svg className="dashboard__aside--logo">
        <use href="./assets/sprite.svg#icon-logo" />
      </svg>
      <span className="dashboard__aside--horizontal" />
      <button className="btn btn-profile"><Link to="/profile">Profile</Link></button>
      <button className="btn btn-logout" onClick={() => { localStorage.removeItem("user"); window.location.reload() }}>Logout</button>
      <img src="./assets/image-avatar.jpg" alt="Profile avatar"
        className="dashboard__aside--profile-link"
      />
    </nav>
  );
};

export default ASide;
