import rootApi from '../root';

const getInfoByAddressRepository = (walletAddress) =>
  rootApi.get(`/wallet/info/${walletAddress}`);

export default getInfoByAddressRepository;
