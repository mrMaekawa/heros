import axios from 'axios'
import config from '../config'

const url: string = config.apiUrl + config.accessToken +'/'

export default axios.create({
  baseURL: url
});
