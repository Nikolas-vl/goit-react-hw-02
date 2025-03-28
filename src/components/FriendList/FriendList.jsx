import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ list }) => {
  return (
    <div className={s.friends}>
      <ul className={s.friendsList}>
        {list.map(({ avatar, name, isOnline, id }) => (
          <li className={s.friendsItem} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
