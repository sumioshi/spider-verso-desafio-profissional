import { Request, Response } from 'express'
import personagensService from '../service/personagensService';
import axios from 'axios';
import { personagensType } from '../types/personagens.type';

class personagensController{
    
    async buscarPersonagens(req:Request, res:Response){
        try{
            const url = 'https://gateway.marvel.com:443/v1/public/series/38760/characters?apikey=5d7f6b0824b0cc578dce399078cb8331&ts=1&hash=eb4e16723d4f1a677bde26ad473e1c1b'
            const response = await axios.get(url)
            const responseData =  response.data.data.results;

            for(const resultData of responseData){
                const personagens : personagensType = {
                    descricacao: resultData.description,
                    nome: resultData.name,
                    urlImagem: resultData.thumbnail.path
                }    
                    await personagensService.create(personagens);
                }
                return res.status(201).json({ message: 'Personagens da Marvel salvos com sucesso no banco de dados.' });

            }catch(error){
                console.error(error);         
        }
    }
    
    async create(req:Request, res:Response){
        try{
            const personagens = await personagensService.create(req.body)
            res.status(201)
            return res.json(personagens)
        }catch(error){
            console.error(error);
        }   
    }

    async findAll(req:Request, res:Response){
        try{
            const personagens = await personagensService.findAll()
            res.status(200)
            return res.json(personagens);
        }catch(error){
            console.error(error)
        }
    }

    async update(req:Request, res:Response){
        try{
            const personagens = await personagensService.update(req.params.id, req.body);
            res.status(201)
            return res.json(personagens);
        }catch(error){
            console.error(error)
        }
    }

    async delete(req:Request, res:Response){
        try{
            const personagens = await personagensService.delete(req.params.id);
            res.status(201);
            return res.json(personagens);
        }catch(error){
            console.error(error);
        }
    }

    async buscarPersonagemNome(req:Request, res:Response){
        try{
            const nome = req.params.nome;
            const personagem = await personagensService.buscarPersonagemNome(nome)
            res.status(200)
            return res.json(personagem)
        }catch(error){
            console.error(error);
        }
    }

    async retornarCaminhoImagem(req:Request, res:Response){
        try{
            const personagem = await personagensService.retornarCaminhoImagem();
            res.status(200)
            return res.json(personagem)
        }catch(error){
            console.error(error);
        }
    }
}

export default new personagensController()