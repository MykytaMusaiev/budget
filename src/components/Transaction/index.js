import PropTypes from 'prop-types';
import {Comment, TransactionDate, Value, Wrapper} from "./styles";

const Transaction = ({transaction: {value, date, comment}}) => (
    <Wrapper value={value}>
        <TransactionDate>{date}</TransactionDate>
        <Value>Value: {Number(value).toFixed(2)}</Value>
        <Comment>Comment: {comment}</Comment>
        <br/>
    </Wrapper>
)

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
}

Transaction.defaultProps = {
    transaction: {
        label: '',
        value: ''
    }
}

export default Transaction