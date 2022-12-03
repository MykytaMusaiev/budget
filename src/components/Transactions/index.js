import Transaction from "../Transaction";
import PropTypes from 'prop-types';

const Transactions = ({transactions}) => (transactions.map(transaction =>
        <Transaction key={transaction.id} transaction={transaction} />
    )
)

Transactions.propsType = {
    transactions: PropTypes.array
}

Transactions.defaultProps = {
    transactions: []
}

export default Transactions