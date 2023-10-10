const TokenService = require('../services/TokenService.js');
const ApiService = require('../services/ApiService.js');

class CustomerController {
  async getCustomerData(req, res) {
    try {
      const token = TokenService.getTokenFromRequest(req);
      if (!token) {
        return res.status(400).json({ error: 'Token is required' });
      }

      const customerData = await ApiService.getCustomerData(token);

      return res.json(customerData);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new CustomerController();
