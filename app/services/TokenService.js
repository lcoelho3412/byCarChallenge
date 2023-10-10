class TokenService {
  getTokenFromRequest(request) {
    return request.query.token; // Extract token from query parameter
  }
}

module.exports = new TokenService();
