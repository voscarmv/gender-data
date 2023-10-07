import axios from 'axios';

// API Documentation: http://ec2-18-170-135-55.eu-west-2.compute.amazonaws.com/api/v1/

const API = axios.create({
    baseURL: 'http://digitalgendergaps.org/api/v1',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  export const fetchInit = async () => await API.get(`/init`);