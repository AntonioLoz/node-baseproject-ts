import express from 'express';
import { userRoutes } from './routes/users.routes'

const app = express();
   
app.set('port', 8080);

app.listen(app.get('port'), () => {
    
    console.log(`Server is running on port ${app.get('port')}`);
});

app.use('/users', userRoutes.router);