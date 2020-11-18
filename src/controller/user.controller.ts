import { Request, Response } from 'express';

export class UserController {

    public index(req: Request, res: Response) {
      
            res.send('TODO BIEN TODO CORRECTO.')
        
    }
}

export const userController = new UserController(); 