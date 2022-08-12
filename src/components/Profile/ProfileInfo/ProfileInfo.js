import PropTypes from 'prop-types';
import { ProfileImg, ProfileTitle, ProfileText } from "./ProfileInfo.styled";

export const ProfileInfo = ({
    username,
    tag,
    location,
    avatar,
}) => {
    return (
        <>
            <ProfileImg
                src={avatar}
                alt="User avatar"
            />
            <ProfileTitle>{username}</ProfileTitle>
            <ProfileText>{`@${tag}`}</ProfileText>
            <ProfileText>{location}</ProfileText>
        </>
    );
};

ProfileInfo.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}