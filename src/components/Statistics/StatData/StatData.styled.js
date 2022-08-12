import styled from "@emotion/styled";

export const StatItemLabel = styled.span`
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.isBgBright
                    ? p.theme.colors.black
                    : p.theme.colors.white};
`;

export const StatItemValue = styled.span`
    font-size: 1.3em;
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.isBgBright
                    ? p.theme.colors.black
                    : p.theme.colors.white};
`;