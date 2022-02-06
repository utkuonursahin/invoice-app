import {useProfile} from "../../context/ProfileContext";
import {Link} from "react-router-dom";

const ASide = () => {
  const {isProfileClicked, setIsProfileClicked} = useProfile()
  return (
      <nav aria-label="primary navigation" className="dashboard__aside">
        <svg className="dashboard__aside--logo">
          <use href="./assets/sprite.svg#icon-logo"/>
        </svg>
        <span className="dashboard__aside--horizontal"/>
        <button className="btn btn-profile"><Link to="/profile">Profile</Link></button>
        <button className="btn btn-logout">Logout</button>
        <img src="./assets/image-avatar.jpg" alt="Profile avatar"
             className="dashboard__aside--profile-link"
             onClick={() => setIsProfileClicked(!isProfileClicked)}
        />
      </nav>
  );
};

export default ASide;
