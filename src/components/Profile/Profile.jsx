const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className="profile-container">
      <div className="user-container">
        <img src={avatar} alt="User avatar" className="user-img" />
        <p className="user-name">{username}</p>
        <p className="user-tag">@{tag}</p>
        <p className="user-location">{location}</p>
      </div>

      <ul className="rating-list">
        <li className="rating-item">
          <span className="rating-title">Followers</span>
          <span className="rating-stats">{followers}</span>
        </li>
        <li className="rating-item">
          <span className="rating-title">Views</span>
          <span className="rating-stats">{views}</span>
        </li>
        <li className="rating-item">
          <span className="rating-title">Likes</span>
          <span className="rating-stats">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
