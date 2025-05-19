import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsAutomaticService {
  solucion(): string {
    return 'concepts-manual-solucion-automatic';
  }
}
