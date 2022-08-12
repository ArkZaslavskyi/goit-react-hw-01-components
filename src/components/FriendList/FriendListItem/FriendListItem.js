import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendImage, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({
    avatar, name, isOnline
}) => {
    return (
        <FriendItem>
            <FriendStatus status={isOnline}></FriendStatus>
            <FriendImage src={avatar}></FriendImage>
            <FriendName>{name}</FriendName>
        </FriendItem>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};