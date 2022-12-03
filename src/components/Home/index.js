import {useState, useEffect} from 'react';

import {getItems, addItem} from "../../utils/indexdb";

import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../Header";

import {GlobalStyle, Wrapper} from "./styles";

const Home = () => {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([])

    const onChange = ({value, date, comment}) => {
        const transaction = {
            value: +value,
            comment,
            date,
            id: Date.now()
        }

        setBalance(balance + Number(value))

        setTransactions([
            transaction,
            ...transactions
        ])

        addItem(transaction)
    }

    useEffect(() => {
        getItems().then((item) => {
            setTransactions(item)
        }).catch((e) => {
        })
    }, [])

    return (
        <ErrorBoundary>
            <Wrapper>
                <Header/>
                <GlobalStyle/>
                <Balance balance={balance}/>
                <Form onChange={onChange}/>
                <hr/>
                <Transactions transactions={transactions}/>
            </Wrapper>
        </ErrorBoundary>
    )

};

export default Home;