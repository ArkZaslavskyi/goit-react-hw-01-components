import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { ProfileStatsItem, StatTitle, StatValue } from "./ProfileStats.styled";
import { theme } from 'constants/theme';

export const ProfileStats = ({ stats }) => {
    const statsTitles = Object.keys(stats);
    const amountStats = statsTitles.length;

    return (
        <Box
            as='ul'
            display='flex'
            alignItems='center'
            justifyContent='space-around'
            width={1}
            borderTop='2px solid darkgray'
            bg={theme.colors.bgMediumGray}
        >
            {
                statsTitles.map((title, idx) => 
                    <ProfileStatsItem
                        key={idx}
                        length={amountStats}
                    >
                        <StatTitle>{title}</StatTitle>
                        <StatValue>{stats[title]}</StatValue>
                    </ProfileStatsItem>
                )
            }
            
        </Box>
    );
};

ProfileStats.propTypes = {
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
    })
}