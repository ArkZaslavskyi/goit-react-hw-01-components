import PropTypes from 'prop-types';
import { StatItemLabel, StatItemValue } from "./StatData.styled";

export const StatData = ({ label, percentage, isBgBright }) => {
    return (
        <>
            <StatItemLabel isBgBright={isBgBright}>
                {label}
            </StatItemLabel>

            <StatItemValue isBgBright={isBgBright}>
                {`${percentage}%`}
            </StatItemValue>
        </>
    );
};

StatData.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    isBgBright: PropTypes.bool.isRequired,
};

