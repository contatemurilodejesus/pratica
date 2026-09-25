//principal parte para routes sempre
const express= require('express');//ao contar express permite que ele obitenha requerimento e requisicoes 
const router = express.Router; //como o o router vai funcionar por requisiocoes em funcao do proprio router

router.get('/articles', controllerArticles.listarArticles);
router.delete('/articles/:id', controllerArticles.deletarArticles);
router.put('/articles/:id', controllerArticles.alterarArticles);
router.post('/articles', controllerArticles.criarArticles);



