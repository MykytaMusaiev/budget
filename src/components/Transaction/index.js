import PropTypes from 'prop-types';
import {useContext, useCallback} from "react";
import {AppContext} from "../../providers/context";

import {Comment, TransactionDate, Value, Wrapper, Icon} from "./styles";
import StarOrdinary from '../../assets/img/star_empty.png'
import StarGolden from '../../assets/img/star_golden.png'


const Transaction = ({transaction: {id, value, date, comment, isStarred}, onDelete, onStarClick}) => {
    const {state} = useContext(AppContext)
    const deleteItem = useCallback(() => onDelete(id), [id, onDelete])

    return (
        <Wrapper value={value}>
                <Icon onClick={()=>onStarClick(id)}>
                    <img src={isStarred ? StarGolden : StarOrdinary} alt="star"/>
                </Icon>
            <TransactionDate>{date}</TransactionDate>
            <Value name="value">Value: {Number(value).toFixed(2)}, {state.currency}.</Value>
            <Comment>Comment: {comment}</Comment>
            <button onClick={deleteItem}>Delete</button>
            <br/>
        </Wrapper>
    )
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    }),
    onDelete: PropTypes.func,
    onStarClick: PropTypes.func
}

Transaction.defaultProps = {
    transaction: {
        label: '',
        value: ''
    }
}

export default Transaction