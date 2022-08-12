import styled from "@emotion/styled";

export const StatItem = styled.li`
    padding: ${p => p.theme.space[3]}px;
    
    flex-basis: calc(100% / ${p => p.amountItems});
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${p => p.cellColor};
`;

