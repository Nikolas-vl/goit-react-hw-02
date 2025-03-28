import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.mainInfo}>
        <img className={s.avatar} src={avatar} alt='User avatar' />
        <p className={s.username}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span> <span className={s.boldText}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span> <span className={s.boldText}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span> <span className={s.boldText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
