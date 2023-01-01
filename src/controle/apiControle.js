const Formularios = require('../instancia/Formularios')


//Create
exports.formPost = (req, res)=>{
   Formularios.create(req.body).then(o=>{
      res.send(o.dataValues)
   })
}

//Read
exports.form = async (req, res)=>{
    let form = await Formularios.findAll();
    res.send(form)
}

//Read por id
exports.formGet = async (req, res)=>{
let  {id}  = req.params;
let forId = await Formularios.findByPk(id)
res.send(forId)
}

//Update
exports.formPut = async (req, res)=>{
    let  {id}  = req.params;
    let {nome, sobre_nome, telefone, email, datas, sexo, estado_civil, cpf, renda, cep, rua, cidade, estado, n_casa } = req.body
    let formEdit = await Formularios.findByPk(id)
    if(formEdit){
    formEdit.nome = nome
    formEdit.sobre_nome = sobre_nome
    formEdit.telefone = telefone
    formEdit.email = email
    formEdit.datas = datas
    formEdit.sexo = sexo
    formEdit.estado_civil = estado_civil
    formEdit.cpf = cpf
    formEdit.renda = renda
    formEdit.cep = cep
    formEdit.rua = rua
    formEdit.cidade = cidade
    formEdit.estado = estado
    formEdit.n_casa = n_casa
    await formEdit.save()
    res.send(formEdit)}else{
        res.send("Error")
    }
}

//Delete
exports.formDel = async (req, res)=>{
    let  {id}  = req.params;
    await Formularios.destroy({where:{id}})
    res.send()
}

