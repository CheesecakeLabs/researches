import axios from "axios";

const request = (method, url, data) => axios({ method, url, data });

export default request;
