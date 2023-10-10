class TokenService {
  getTokenFromRequest(request) {
    // Extract token from query parameter
    // depeding on how token is received data will need to be treated to return something like {token: 'ARandomGeneratedToken'} from token=ARandomGeneratedToken

    /* This service handles the extraction of the token from the request URL 
    and provides it to the ApiService for API communication. */
    
    const { token } = request.query;

    token
      .substr(1)
      .split("&")
      .reduce((queryParams, param) => {
        const [key, value] = param.split("=");

        queryParams[key] = value;

        return queryParams;
      }, {});
  }
}

module.exports = new TokenService();
