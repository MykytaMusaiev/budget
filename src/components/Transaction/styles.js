import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({value}) => value < 0
          ? ({theme}) => theme.transactionPositiveColor
          : ({theme}) => theme.transactionNegativeColor
  };
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin: 5px 2px 5px 2px;
  display: flex;
`;
Wrapper.displayName = 'TransactionWrapper';

export const TransactionDate = styled.div`
  flex-grow: 1;
  color: ${({theme}) => theme.textColorTransactions}  
`
TransactionDate.displayName = 'TransactionDate';

export const Value = styled.div`
  flex-grow: 1;
  color: ${({theme}) => theme.textColorTransactions}
`
TransactionDate.displayName = 'Value';

export const Comment = styled.div`
  flex-grow: 2;
  color: ${({theme}) => theme.textColorTransactions}
`
TransactionDate.displayName = 'Comment';

export const Icon = styled.span`
  img {
    max-width: 20px;
    margin-right: 5px;
  }
`
Icon.displayName = 'Icon';

