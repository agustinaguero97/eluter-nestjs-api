import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('lmao')
    findAll(): string {
        return 'This action returns all users';
    }
}
