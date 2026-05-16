import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import { userRoute } from './modules/user/user.route';

const app: Application = express();

// MiddleWare
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// GET
app.get('/', (req: Request, res: Response) => {
  // res.send('Hello Express Server!');

  res.status(200).json({
    success: true,
    message: 'Hello Express Server!',
    author: 'Next Level Express',
  });
});

// UserRoute
app.use('/api/users', userRoute);

export default app;
