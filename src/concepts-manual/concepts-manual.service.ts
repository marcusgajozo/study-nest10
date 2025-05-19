import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsManualService {
  solucion(): string {
    return 'concepts-manual-solucion';
  }
}
