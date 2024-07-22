

async function create(request, response) {
    return await response.json("Controller create clientes");
}

async function read(request, response) {
    return await response.json("Controller read clientes");
}


async function update(request, response) {
    return await response.json("Controller update clientes")
}

async function detele(request, response) {
    return await response.json("Controller delete clientes")

}
