const axios = require('axios');

/* This service is responsible 
for communicating with the API using the provided token.
It will make an HTTP request to the API and retrieve customer data. */

class ApiService {
  async getCustomerData(token) {
    // Client api 
    const apiUrl = 'client-api-url';

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}` // Send token in the header
        }
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch customer data from the API');
    }
  }
}

module.exports = new ApiService();
