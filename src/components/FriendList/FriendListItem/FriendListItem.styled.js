import styled from "@emotion/styled";

export const FriendItem = styled.li`
    padding:
        ${p => p.theme.space[3]}px
        ${p => p.theme.space[4]}px;

    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;

    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.normal};
    overflow: hidden;

    &:not(:first-of-type) {
        margin-top: ${p => p.theme.space[4]}px;
    }
`;

export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;

    border-radius: ${p => p.theme.radii.round};
    background-color:
        ${p => p.status
            ? p => p.theme.colors.friendList.green
            : p => p.theme.colors.friendList.red
        };
`;
export const FriendImage = styled.img`
    display: block;
    width: 80px;
    border-radius: ${p => p.theme.radii.normal};
    overflow: hidden;
    background-color: ${p => p.theme.colors.bgMediumGray};
`;
export const FriendName = styled.p`
    font-size: 2em;
    font-weight: ${p => p.theme.fontWeights.semiBold};
    color: ${p => p.theme.colors.textBlack};
`;
