import {Container, Section, TotalBalance, TransactionTable, FormBar} from 'components'
import { useState, useEffect } from 'react';
import { getAllTransactionsAPI } from 'API';

export const HomePage = () => {
 
    const [ allTransactions, setAllTransactions] = useState('');
    const [ totalBalanceValue, setTotalBalanceValue] = useState(0);


    const getAllTransactionAndSet = async () => {

        const transactionsSort = (data) => {
            return [...data].sort((a,b) => new Date(a.date.year, a.date.month, a.date.day) - new Date(b.date.year, b.date.month, b.date.day));
        }

        const {data} = await getAllTransactionsAPI();

        const sortedData = transactionsSort(data.result);

        const calculatedBalance = sortedData.reduce((balanceCount, item) => {

            if (item.type === "income") {
                item.balance = balanceCount + item.sum;
                balanceCount += item.sum;
            } else {
                item.balance = balanceCount - item.sum;
                balanceCount -= item.sum;
            }
            return balanceCount
            
        }, 0);

        setAllTransactions(sortedData);
        setTotalBalanceValue(calculatedBalance);
    }

    useEffect(() => {
        getAllTransactionAndSet();
    },[])



    return (
        <>
        <Section className='home-section'>
            <Container className='home-container'>
                       
                <TotalBalance totalBalanceValue={totalBalanceValue}/>

                <TransactionTable allTransactions={allTransactions} className="transaction-table"/>

                <FormBar/>
            </Container>
        </Section>
        </>
    );
};
