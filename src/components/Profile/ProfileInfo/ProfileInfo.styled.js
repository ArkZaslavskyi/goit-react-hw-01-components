import styled from "@emotion/styled";

export const ProfileImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 60%;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.bgMediumGray};
`;

export const ProfileTitle = styled.p`
    margin-top: ${p => p.theme.space[4]}px;
    font-size: 1.5em;
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.textBlack};
`;

export const ProfileText = styled.p`
    margin-top: ${p => p.theme.space[3]}px;
    font-size: 1.1em;
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.textGray};
`;