import PropTypes from 'prop-types';
import { Box } from "components/Box";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileStats } from "./ProfileStats/ProfileStats";
import { ProfileDesc } from "./Profile.styled";

export const Profile = ({
    userData: {
        username,
        tag,
        location,
        avatar,
        stats
    }
}) => {
    return (
        <Box
            width='300px'
            marginLeft='auto'
            marginRight='auto'
            borderRadius='4px'
            boxShadow='1px 1px 2px 2px #cecece'
            overflow='hidden'
            textAlign='center'
        >
            <ProfileDesc>
                <ProfileInfo
                    username={username}
                    tag={tag}
                    location={location}
                    avatar={avatar}
                />
            </ProfileDesc>

            <ProfileStats
                stats={stats}
            />
        </Box>
    );
};

Profile.propTypes = {
    userData: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
        }).isRequired
    }).isRequired
}