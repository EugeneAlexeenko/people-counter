import express, {Application } from 'express';
import cors from 'cors';
const port = process.env.PORT || 5001;

const app: Application = express();

app.use(cors());
app.use(express.json());

const onServerStarted = () => console.log(`Server listening on port ${port}`);

app.listen(port, onServerStarted);
