import { Router } from 'express';
import { body } from 'express-validator';
import { signup, login, getMe } from '../controllers/authController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post(
  '/signup',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters'),
    body('role')
      .optional()
      .isIn(['USER', 'ADMIN'])
      .withMessage('Role must be USER or ADMIN'),
  ],
  signup
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  login
);

router.get('/me', authMiddleware, getMe);

export default router;
