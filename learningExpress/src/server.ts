import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
const app: Application = express();
const port = 3000;

// MiddleWare - UseJSON
app.use(express.json());

// GET
app.get('/', (req: Request, res: Response) => {
  // res.send('Hello Express Server!');

  res.status(200).json({
    message: 'Hello Express Server!',
    author: 'Next Level Express',
  });
});

// POST
app.post('/', async (req: Request, res: Response) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
