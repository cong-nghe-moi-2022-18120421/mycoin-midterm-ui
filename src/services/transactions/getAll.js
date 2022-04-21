import rootApi from '../root';

const getAllTransactionsRepository = (blockIndex) =>
  rootApi.get('/transactions', {
    params: {
      blockIndex,
    },
  });

export default getAllTransactionsRepository;
