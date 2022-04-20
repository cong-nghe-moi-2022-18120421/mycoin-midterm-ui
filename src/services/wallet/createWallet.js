import rootApi from '../root';

const createWalletRepository = () => rootApi.get('/wallet/create');

export default createWalletRepository;
