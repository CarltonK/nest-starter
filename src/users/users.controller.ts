import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        ;
    }
}
