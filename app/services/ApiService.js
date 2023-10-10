const axios = require('axios');

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
