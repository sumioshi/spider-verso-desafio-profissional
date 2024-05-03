import { Router } from 'express'
import comicsController from './controller/comicsController'
import criadoresController from './controller/criadoresController';
import personagensController from './controller/personagensController';

const routes = Router();

routes.get('/inserir-comics', comicsController.buscarComics);
routes.post('/create-comics', comicsController.create);
routes.get('/comics', comicsController.findAll);
routes.put('/comics/:id', comicsController.update);
routes.delete('/comics/delete/:id', comicsController.delete);

routes.get('/inserir-criadores', criadoresController.buscarCriadoresDaMarvel)
routes.post('/create-criadores', criadoresController.create);
routes.get('/criadores', criadoresController.findAll);
routes.put('/criadores/:id', criadoresController.update);
routes.delete('/criadores/delete/:id', criadoresController.delete);

routes.get('/inserir-personagens', personagensController.buscarPersonagens)
routes.post('/create-personagens', personagensController.create);
routes.get('/personagens', personagensController.findAll);
routes.put('/personagens/:id', personagensController.update);
routes.delete('/personagens/delete/:id', personagensController.delete);

//rotas auxiliares
routes.get('/creators-more-than-20-comics', criadoresController.findCriadoresComMaisDeVinteQuadrinhos);
routes.get('/comics-sale-dates', comicsController.buscarDataPublicao);
routes.get('/search-character/:name', personagensController.buscarPersonagemNome);
routes.get('/search-creator-by-letter/:letter', criadoresController.buscarPorLetra);
routes.get('/search-creators-by-role/:role', criadoresController.buscarPorFuncao);
routes.get('/search-comics-by-letter/:letter', comicsController.buscarComicsPorLetra)
routes.get('/search-comics-description-greater-50', comicsController.buscarPorDescricao)
routes.get('/search-character-image', personagensController.retornarCaminhoImagem)


export{
    routes
}