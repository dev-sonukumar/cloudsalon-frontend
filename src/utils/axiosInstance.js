// src/utils/axiosInstance.js
import axios from "axios";
import axiosRetry from "axios-retry";

const API_URL = "https://mcs-backend-zrpv.onrender.com/bisfaqs";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  // You can set other default options for Axios here
});

// Set up axios-retry with your retry settings
axiosRetry(axiosInstance, {
  retries: 5, // Set the number of retry attempts
  retryDelay: axiosRetry.exponentialDelay, // Use an exponential delay between retries
  shouldResetTimeout: true, // Reset timeout for each retry
  retryCondition: (error) => {
    // Define when to retry; you can check for specific status codes or errors here
    return error.response?.status === 500 || error.response?.status === 503;
  },
});

export default axiosInstance;
