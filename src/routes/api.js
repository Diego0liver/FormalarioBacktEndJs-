const express = require('express');
const router = express.Router();
const Form = require('../controle/apiControle')

router.get('/form', Form.form)
router.post('/form', Form.formPost)
router.get('/form/:id', Form.formGet)
router.put('/form/:id', Form.formPut)
router.delete('/form/:id', Form.formDel)


module.exports = router