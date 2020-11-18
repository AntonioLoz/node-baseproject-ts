import { Router } from 'express';
import { userController } from '../controller/user.controller'

class UserRoutes {

    private _router: Router;

    constructor() {
        this._router = Router();
        this.setRoutes();
    }

    private setRoutes() {
        this.router.get('/', userController.index)

    }

	public get router(): Router {
		return this._router;
	}

	public set router(value: Router) {
		this._router = value;
	}

}

export const userRoutes = new UserRoutes();
