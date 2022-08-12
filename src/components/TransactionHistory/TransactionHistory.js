import { PropTypes } from 'prop-types';
import { TransActionTable } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <TransActionTable>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>{
                items.map(({ id, type, amount, currency }) =>
                    <RowTable
                        key={id}
                        value={({ type, amount, currency })}
                    />
                )
            }</tbody>
        </TransActionTable>
    );
};

const RowTable = (
    { value: { type, amount, currency } }
) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};
