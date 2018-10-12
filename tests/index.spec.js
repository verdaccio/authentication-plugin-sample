import AuthPlugin from '../src/index';

describe('Memory', function() {
  let auth;

  beforeEach(function() {
    auth = new AuthPlugin(
        {},
        {
          config: jest.fn(),
          logger: jest.fn(),
        }
    );
  });

  test('adds users', function(done) {
    auth.adduser('test', 'test', (error, user) => {
      expect(user).toEqual(['test']);
      done();
    });
  });
});
