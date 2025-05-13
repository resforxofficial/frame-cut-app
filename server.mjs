import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = 8800;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '.', 'assets')));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.listen(PORT, () => console.log(`localhost:${PORT} is listening`));
