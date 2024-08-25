import express from 'express';
import path from 'path';
const __dirname = import.meta.dirname;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
