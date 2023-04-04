import  express  from "express";
import  LivroRouter  from "./Routes/LivroRoute.js";

const app = express();

const port = 3002;

app.use(express.json());
app.use('/livros', LivroRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});