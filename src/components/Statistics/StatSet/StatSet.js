import PropTypes from 'prop-types';
import { getRandomHexColor } from "utils";
import { Box } from "components/Box";
import { StatData } from "components/Statistics";
import { StatItem } from "./StatSet.styled";

export const StatSet = ({ stats }) => {
    return (
        <Box as='ul' display='flex'>
            {
                stats.map(stat => {
                    const randomColor = getRandomHexColor();

                    return (
                        <StatItem
                            key={stat.id}
                            amountItems={stats.length}
                            cellColor={randomColor.bgColor}
                        >
                            <StatData
                                label={stat.label}
                                percentage={stat.percentage}
                                isBgBright={randomColor.isBgBright}
                            />
                        </StatItem>
                    );
                })
            }
        </Box>
    );
};

StatSet.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};
