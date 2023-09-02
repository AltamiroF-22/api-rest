import Aluno from '../models/Aluno';

class HomerController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'uuuuu',
      sobrenome: 'Dultra',
      email: 'kakakooooooa@gmail.com',
      idade: 22,
      peso: 56,
      altura: 1.77,
    });
    res.json(novoAluno);
  }
}

export default new HomerController();
