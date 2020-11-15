import express from 'express';
import path from 'path';
import renderer from './renderer';

const app = express();
const PORT = 8080;

const router = express.Router();

router.use("/*", renderer);

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(router);

app.listen(PORT, () => {
    console.log(`Application launched at port:${PORT}`);
});