import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt={name} width='48' />
      <p className={s.bold}>{name}</p>
      {isOnline ? <p className={s.greenStatus}>Online</p> : <p className={s.redStatus}>Offline</p>}
    </>
  );
};

export default FriendListItem;
