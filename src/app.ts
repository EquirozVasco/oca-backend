import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import questionRoutes from "./routes/question.route";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(questionRoutes)

export default app;