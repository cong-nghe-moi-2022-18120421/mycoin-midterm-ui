import rootApi from '../root';

const getOneTxnByHashRepository = (txnHash) =>
  rootApi.get(`/transactions/${txnHash}`);

export default getOneTxnByHashRepository;
