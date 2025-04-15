import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensagem } from 'src/entities/mensagem.entity';

@Injectable()
export class MensagemService {
  constructor(
    @InjectRepository(Mensagem)
    private mensagemRepository: Repository<Mensagem>,
  ) {}
    async create(mensagem: Mensagem): Promise<Mensagem> {
        const data = this.mensagemRepository.create(mensagem);
        return this.mensagemRepository.save(data);
    }
}