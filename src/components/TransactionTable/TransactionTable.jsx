import { TransactionTableList, TransactionTableItem, TransactionTableListHeader } from './TransactionTable.styled';
import { TransactionMobileCard } from './TransactionCards/TransactionMobileCard';
import { TransactionDesctopCard } from './TransactionCards/TransactionDesctopCard';
import Media from 'react-media';
import { useCreateDataToRender } from "hooks/useCreateDataToRender";

export const TransactionTable = ({dataToRender}) => {

    const { balancedData } = useCreateDataToRender();

    return (
        <>

        <Media query="(min-width: 768px)" render={() =>
          (
            <TransactionTableListHeader>
                <span className='transaction__tittle date'>Date</span>
                <span className='transaction__tittle type'>Type</span>
                <span className='transaction__tittle category'>Category</span>
                <span className='transaction__tittle comment'>Comment</span>
                <span className='transaction__tittle sum'>Sum</span>
                <span className='transaction__tittle balance'>Balance</span>
            </TransactionTableListHeader>
          )}
        />

        <TransactionTableList className="desctop">
        
            

            {balancedData.length !== 0 && balancedData.map(item => {
                return (
                    <TransactionTableItem key={item._id}>

                        <Media query="(max-width: 767px)" render={() =>
                            (
                                <TransactionMobileCard {...item}/>
                            )}
                        />

                         <Media query="(min-width: 768px)" render={() =>
                            (
                                <TransactionDesctopCard {...item}/>
                            )}
                        />

                        
                    </TransactionTableItem>
                )
            })}

        </TransactionTableList>
</>
    )
}