import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { theme } from 'constants';
import { StatSet } from "components/Statistics";
import { StatTitle } from "./Statistics.styled";

export const Statistics = ({
    title,
    stats
}) => {
    return (
        <Box
            as='section'
            borderRadius={theme.radii.normal}
            boxShadow={theme.shadows.normal}
            overflow='hidden'
        >
            {title && <StatTitle>{title}</StatTitle>}
            <StatSet stats={stats} />
        </Box>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};
