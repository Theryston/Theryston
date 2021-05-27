import { InternalController } from './controllers/InternalController';
import { Router } from 'express';
const routes = Router();

// controllers
const internalController = new InternalController();

// internal routes
routes.get('/v1/internal/status', (req, res) => internalController.status(req, res));

export { routes };