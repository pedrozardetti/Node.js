// CommonJS ==> Padrão de importação utilizando o require
// ESModules ==> Padrão de importação utilizando o import/export

import http from 'node:http'
import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { json } from './middlewares/json.js'



const database = new Database()


const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)
    
    // Rotas HTTP são portas de entradas para executar diferente ações na aplicação
    if (method == 'GET' && url == '/users') {
        const users = database.select('users')

        return res.end(JSON.stringify(users))
        .setHeader('Content-type', 'application/json')
    }

    if (method == 'POST' && url == '/users') {
        const { name, email } = req.body

        const user = {
            id: randomUUID(),
            name, 
            email, 
        }

        database.insert('users', user)

        // HTTP status code que simboliza uma resposta de sucesso
        return res.writeHead(201).end()
    }

    // HTTP status code que simboliza que a rota não existe
    return res.writeHead(404).end('Not found')

})


server.listen(3333)




