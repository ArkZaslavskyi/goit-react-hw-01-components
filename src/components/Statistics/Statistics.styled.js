import styled from "@emotion/styled";

export const StatTitle = styled.h2`
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeights.semiBold};
    font-size: 1.2em;
    text-align: center;
    padding: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.textGray};
`;

