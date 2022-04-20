import rootApi from '../root';

const mineBlockRepository = (publicKey) =>
  rootApi.post('/blocks/mine', {
    minerAddress: publicKey,
  });

export default mineBlockRepository;
