import styled from "@emotion/styled";

export const ProfileStatsItem = styled.li`
    display: flex;
    flex-basis: calc(100% / ${p => p.length});
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${p => p.theme.space[4]}px;
    &:not(:last-child) {
        border-right: 2px solid darkgray;
    }
`;

export const StatTitle = styled.span`
    font-size: 1em;
    text-transform: capitalize;
    color: ${p => p.theme.colors.textGray};
`;

export const StatValue = styled.span`
    font-size: 1.1em;
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.textBlack};
`;
