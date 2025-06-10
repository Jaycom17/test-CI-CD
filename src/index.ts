import express from 'express';
import taskRouter from './routes/tasks'; // Importamos las rutas de tareas

const app = express();
app.use(express.json());

app.use('/tasks', taskRouter);

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app; // Exportamos para testing
