class TokenService {
  getTokenFromRequest(request) {
    // Extract token from query parameter
    // depeding on how token is received data will need to be treated to return something like {token: 'ARandomGeneratedToken'} from token=ARandomGeneratedToken

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
