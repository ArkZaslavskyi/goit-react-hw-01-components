import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendListItem } from 'components/FriendList/';

export const FriendList = ({
  friendSet
}) => {
  return (
    <Box
      as='ul'
      width={320}
      marginLeft='auto'
      marginRight='auto'
    >
      {
        friendSet.map(({avatar, name, isOnline, id}) => {
        return (
          <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
        )})
      }
    </Box>);
};

FriendList.propTypes = {
  friendSet: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
