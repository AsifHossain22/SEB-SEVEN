import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import { pool } from './db';
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

// GET - GetAllUsers
app.get('/api/users', async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT * FROM users
      `);
    res.status(200).json({
      success: true,
      message: 'All users found successfully!',
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

// GET - GetSingleData
app.get('/api/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  // console.log(id);

  try {
    const result = await pool.query(
      `
      SELECT * FROM users WHERE id = $1
      `,
      [id],
    );
    // console.log(result);

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: 'User found successfully!',
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

// PUT - Update
app.put('/api/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params; // FindUserByID

  const { name, password, age, is_active } = req.body; // UserData
  // console.log('ID: ', id);
  // console.log({ id, name, password, age, is_active });

  try {
    const result = await pool.query(
      `
    UPDATE users SET name = COALESCE($1, name), password = COALESCE($2, password), age = COALESCE($3, age), is_active = COALESCE($4, is_active)
    WHERE id = $5
    RETURNING *
    `,
      [name, password, age, is_active, id],
    );
    // console.log(result);

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

// DELETE - DeleteMethod
app.delete('/api/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
      DELETE FROM users WHERE id = $1
      `,
      [id],
    );
    // console.log(result);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

export default app;
