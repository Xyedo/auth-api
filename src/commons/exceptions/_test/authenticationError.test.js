const AuthenticationError = require('../authenticationError');
 
describe('AuthenticationError', () => {
  it('should create AuthenticationError correctly', () => {
    const authenticationError = new AuthenticationError('authentication error!');
 
    expect(authenticationError.statusCode).toEqual(401);
    expect(authenticationError.message).toEqual('authentication error!');
    expect(authenticationError.name).toEqual('AuthenticationError');
  });
});