import rootApi from '../root';

const getBalance = (publicKey) => rootApi.get(`/wallet/balance/${publicKey}`);

export default getBalance;
