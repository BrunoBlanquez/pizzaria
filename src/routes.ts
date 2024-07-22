import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuth } from './middlewares/isAuth';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/Products/CreateProductController';

const router = Router();

// Rotas Usuario
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/userinfo', isAuth, new DetailUserController().handle)

// Rotas Category
router.post('/category', isAuth, new CreateCategoryController().handle)
router.get('/category', isAuth, new ListCategoryController().handle)

// Rotas Products
router.post('/product', isAuth, new CreateProductController().handle)

export {router};