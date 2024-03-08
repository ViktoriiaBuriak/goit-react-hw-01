import css from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profileContainer}>
      <div className={css.userContainer}>
        <img src={avatar} alt="User avatar" className={css.userImg} />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.ratingList}>
        <li className={css.ratingItem}>
          <span className={css.ratingTitle}>Followers</span>
          <span className={css.ratingStats}>{followers}</span>
        </li>
        <li className={css.ratingItem}>
          <span className={css.ratingTitle}>Views</span>
          <span className={css.ratingStats}>{views}</span>
        </li>
        <li className={css.ratingItem}>
          <span className={css.ratingTitle}>Likes</span>
          <span className={css.ratingStats}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
