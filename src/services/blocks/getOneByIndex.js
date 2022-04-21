import rootApi from '../root';

const getOneBlockByIndexRepository = (blockIndex) =>
  rootApi.get(`/blocks/${blockIndex}`);

export default getOneBlockByIndexRepository;
