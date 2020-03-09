import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 3000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

//body parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

routes(app);

app.get('/', (req, res) => {
    res.send(`Our Soccer application is running on ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server started`);
})