// CommonJS ==> Padrão de importação utilizando o require
// ESModules ==> Padrão de importação utilizando o import/export

import http from 'node:http'

const user = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    // Rotas HTTP são portas de entradas para executar diferente ações na aplicação
    if(method == 'GET' && url == '/users') {

        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(user))
    }

    if (method == 'POST' && url == '/users') {
        user.push({
            id: 1,
            name: 'Pedro Safado',
            telefone: '(11) 95021-6699',
        })


        return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Not found')

})


server.listen(3333)




