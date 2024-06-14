import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    console.log('No token found in cookies');
    throw new UnauthenticatedError('Authentication invalid');
  }

  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === '64b2c07ccac2efc972ab0eca';
    req.user = { userId, role, testUser };
    console.log('User authenticated:', req.user);
    next();
  } catch (error) {
    console.error('JWT verification failed:', error);
    throw new UnauthenticatedError('Authentication invalid');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      console.log('User role not authorized:', req.user.role);
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) {
    console.log('Test user attempting write operation');
    throw new BadRequestError('Demo User. Read Only!');
  }
  next();
};
