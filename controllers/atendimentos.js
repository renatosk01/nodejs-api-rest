
const  Atendimento = require('../models/atendimentos')

module.exports= app => {

    app.get('/atendimentos', (req, rest) => rest.send('Você está na rota de atendimento'))

    app.post('/atendimentos', (req, res) => {   
        
        const atendimento = req.body

        Atendimento.adiciona(atendimento)           
        res.send('Post atendimento')
    
    
    })

}
