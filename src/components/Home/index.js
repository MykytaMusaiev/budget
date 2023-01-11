import {useState} from 'react';
import {useData} from "../../hooks";

import Balance from "../Balance";
import Transactions from "../Transactions";
import ErrorBoundary from "../ErrorBoundary";
import {STATUSES} from '../../constant/index';

import {GlobalStyle, Wrapper} from "./styles";
import {ChangeBalance} from "../ChangeBalance";

const Home = () => {
    const [balance, setBalance] = useState(0);
    const {transactions, status, pushTransaction, onDelete, onStarClick} = useData()

    const onChange = (transaction) => {
        pushTransaction(transaction);
        setBalance(balance + Number(transaction.value))
    }

    return (
        <ErrorBoundary>
            <Wrapper>
                <GlobalStyle/>
                <Balance balance={balance}/>

                <ChangeBalance onChange={onChange}/>
                <hr/>
                {status === STATUSES.PENDING ? <div>Loading...</div> : null}
                {status === STATUSES.SUCCESS ?
                    <Transactions transactions={transactions}
                                  onDelete={onDelete}
                                  onStarClick={onStarClick}
                    />
                    : null
                }
            </Wrapper>
        </ErrorBoundary>
    )

};

export default Home;