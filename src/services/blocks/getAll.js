import rootApi from '../root';

const getAllBlocksRepository = () => rootApi.get('/blocks');

export default getAllBlocksRepository;
