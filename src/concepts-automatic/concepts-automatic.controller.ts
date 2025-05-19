import { Controller, Get } from '@nestjs/common';
import { ConceptsAutomaticService } from './concepts-automatic.service';

@Controller('concepts-automatic')
export class ConceptsAutomaticController {
  constructor(
    private readonly conceptsManualService: ConceptsAutomaticService,
  ) {}

  @Get()
  home(): string {
    return this.conceptsManualService.solucion();
  }
}
