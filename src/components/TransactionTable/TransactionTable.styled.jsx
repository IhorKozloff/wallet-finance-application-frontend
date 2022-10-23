import styled from 'styled-components';

export const TransactionTableList = styled.ul`
   
`;
export const TransactionTableItem = styled.li`

    @media screen and (max-width: 767px) {
        background-color: var(--white);
        border-radius: 10px;
        overflow: hidden;
        
        &:not(:last-of-type) {
            margin-bottom: 8px;
        }
    }


    
`;
export const TransactionTableListHeader = styled.div`
    height: 58px;
    background-color: var(--white);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & span {
        font-family: var(--baseFont);
        font-weight: var(--bold);
        font-size: 18px;
        line-height: 27px;
    }
`;