import express from 'express';
import routes from './routes/clientRouter.js';


const app = express();


app.use("/clientes", routes);

app.listen(3000, () => {
    console.log("Go Barber API online.")
})