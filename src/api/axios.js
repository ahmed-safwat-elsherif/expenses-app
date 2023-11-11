import axiosBase from 'axios';
import { baseURL } from '../config';

export default axiosBase.create({ baseURL });
