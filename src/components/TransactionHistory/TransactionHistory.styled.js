import styled from "@emotion/styled";

export const TransActionTable = styled.table`
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    border-collapse: collapse;
    
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.normal};
    overflow: hidden;

    & th {
        width: 30%;

        font-weight: ${p => p.theme.fontWeights.medium};
        color:  ${p => p.theme.colors.white};
        text-transform: uppercase; 
        text-align: center;
    }

    & th,
    & td {
        padding:
            ${p => p.theme.space[3]}px
            ${p => p.theme.space[4]}px;
    }

    & td {
        text-transform: capitalize;
        text-align: center;
    }

    /* Row Background Colors */
    & thead {
        background-color:
        ${p => p.theme.colors.transactionTable.bgHead};

    }

    & tbody tr:nth-of-type(2n) {
        background-color: ${p => p.theme.colors.bgMediumGray};
    }

    /* Cell borders */
    & tbody tr td:not(:last-child) {
        border-right: ${p => p.theme.borders.normal};
        border-right-color:
            ${p => p.theme.colors.transactionTable.cellBorderColor};
    }

    & thead tr th:not(:last-child) {
        border-right: ${p => p.theme.borders.normal};
        border-right-color:
            ${p => p.theme.colors.white};
    }
`;
