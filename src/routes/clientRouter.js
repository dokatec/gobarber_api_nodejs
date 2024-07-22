import { Router } from 'express';


const routes = new Router;



routes.get("/", (request, response) => {
    return response.json("Lista de Clientes")
});


export default routes;