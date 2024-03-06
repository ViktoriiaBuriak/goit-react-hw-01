const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className="friend-img" src={avatar} alt="Avatar" width="48" />
      <p className="friend-name">{name}</p>
      <p className={`friend-status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <li className="friend-item" key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
