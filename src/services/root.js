import axios from 'axios';
import devEnv from './root.dev';
import prodEnv from './root.prod';

let apis;
if (process.env.NODE_ENV === 'production') {
  apis = prodEnv;
} else {
  apis = devEnv;
}

const baseDomain = apis.baseDomain; // API for products
export const basePostUrl = apis.basePostUrl; // API for post
const resourceDomain = apis.resourceDomain; //API for resource (image)

const rootApi = axios.create({
  baseURL: baseDomain,
});
const rootResourceApi = axios.create({
  baseURL: resourceDomain,
});

export default rootApi;
export { rootResourceApi };
