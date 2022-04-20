import rootApi from '../root';

const getPendingTransactionsRepository = () =>
  rootApi.get('/transactions/pending');

export default getPendingTransactionsRepository;
