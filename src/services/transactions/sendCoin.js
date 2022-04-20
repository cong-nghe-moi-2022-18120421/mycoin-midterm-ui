import rootApi from '../root';

const sendCoinRepository = ({
  privateKey,
  publicKey,
  receiverAddress,
  sendAmount,
}) =>
  rootApi.post('/transactions/send', {
    privateKey,
    fromAddress: publicKey,
    toAddress: receiverAddress,
    amount: sendAmount,
  });

export default sendCoinRepository;
