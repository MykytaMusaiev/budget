import {useCallback, useEffect, useState} from 'react';
import {STATUSES} from './constant/index'
import {addItem, getItems} from "./utils/indexdb";

export const useBooleanToggle = (initialStatus = false) => {
    const [status, setStatus] = useState(initialStatus);
    const handleStatusChange = () => setStatus((currentStatus) => !currentStatus);

    return {
        status,
        handleStatusChange
    }
}

export const useData = () => {
    const [state, setState] = useState({
        transaction: [],
        error: '',
        status: STATUSES.IDLE
    })

    useEffect(() => {
        setState({
            ...state,
            status: STATUSES.PENDING
        })
        getItems().then((transactions) => {
            setState({
                ...state,
                transactions,
                status: STATUSES.SUCCESS
            })
        }).catch((e) => {
            setState({
                ...state,
                transactions: [],
                status: STATUSES.ERROR,
                error: e
            })
        })
    }, [])

    const pushTransaction = useCallback((data) => {
        const transaction = {
            ...data,
            value: +data.value,
            id: Date.now()
        }
        setState((state)=> ({
            ...state,
            transactions: [transaction, ...state.transactions]
        }))

        addItem(transaction)
    },[setState])

    const onDelete = useCallback((id) => {
        setState((state) => ({
            ...state,
            transactions: state.transactions.filter((item) => item.id !== id)
        }))
    }, [])

    const onStarClick = useCallback((id) => {
        setState((state) => ({
            ...state,
            transactions: state.transactions.map((item) => item.id !== id ? item : {
                ...item,
                isStarred: !item.isStarred
            })
        }))
    }, [])

    return {
        ...state,
        pushTransaction,
        onDelete,
        onStarClick
    }
}