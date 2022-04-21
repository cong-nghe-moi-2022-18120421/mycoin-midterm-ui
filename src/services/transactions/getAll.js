import rootApi from '../root';

const getAllTransactionsRepository = () => rootApi.get('/transactions');

export default getAllTransactionsRepository;
