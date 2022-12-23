import Transaction from "../Transaction";
import PropTypes from 'prop-types';

const Transactions = ({transactions = [], onDelete, onStarClick}) => {
    return transactions.map(transaction => {
        return <Transaction
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
            onStarClick={onStarClick}
        />
    }
)}

Transactions.propsType = {
    transactions: PropTypes.array
}

Transactions.defaultProps = {
    transactions: []
}

export default Transactions