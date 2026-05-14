import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import { Pool } from 'pg';

const app: Application = express();
const port = 3000;

// MiddleWare
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// POOL
const pool = new Pool({
  connectionString:
    'postgresql://neondb_owner:npg_VK1joI4ESdJr@ep-lingering-hall-aprl9atz-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
});

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
  // console.log(req.body);

  const { name, email, password } = req.body;
  res.status(201).json({
    message: 'Created a test request!',
    data: {
      name,
      email,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
