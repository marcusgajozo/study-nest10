import { Controller, Get, Param } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Get()
  findAll(): string {
    return 'message-findAll';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `message-findOne-${id}`;
  }
}
