import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const createTokens = async (user, secret, secret2) => {
  const {
    id, username, isAdmin, ...rest
  } = user;

  const createToken = jwt.sign(
    { user: { id, username, isAdmin } },
    secret,
    { expiresIn: '1d' },
  );

  const createRefreshToken = jwt.sign(
    { user: { id } },
    secret2,
    { expiresIn: '1w' },
  );

  return [createToken, createRefreshToken];
};

export const refreshTokens = async (token, refreshToken, models, SECRET, SECRET2) => {
  let userId = 0;
  try {
    const { user: { id } } = jwt.decode(refreshToken);
    userId = id;
  } catch (err) {
    return {};
  }
  if (!userId) { return {}; }

  const user = await models.User.findOne({ where: { id: userId }, raw: true });
  if (!user) { return {}; }

  const refreshSecret = user.password + SECRET2;


  try {
    jwt.verify(refreshToken, refreshSecret);
  } catch (err) {
    console.log('Unable to verify refreshToken');
    return {};
  }

  const [newToken, newRefreshToken] = await createTokens(user, SECRET, refreshSecret);
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user,
  };
};

export const tryLogin = async (username, password, models, SECRET, SECRET2) => {
  const user = await models.findByLogin(username);
  if (!user) {
    return {
      success: false,
      errors: [{ path: 'login', message: 'Wrong login details' }],
    };
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    // bad password
    return {
      success: false,
      errors: [{ path: 'login', message: 'Wrong login details' }],
    };
  }
  const refreshTokenSecret = user.password + SECRET2;
  const [token, refreshToken] = await createTokens(user, SECRET, refreshTokenSecret);

  return {
    success: true,
    token,
    refreshToken,
  };
};
