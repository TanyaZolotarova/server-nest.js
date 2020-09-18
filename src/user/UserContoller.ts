import {Controller, Delete, Get, Post, Put} from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get('/')
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get('/one')
    findOne(): string {
        return 'This action returns one cats';
    }

    @Post('/')
    create(): string {
        return 'This action returns one cats';
    }

    @Delete('/:id')
    delete(): string {
        return 'This action returns one cats';
    }

    @Post('/login')
    login(): string {
        return 'This action returns one cats';
    }

    @Post('/register')
    create(): string {
        return 'This action returns one cats';
    }

      @Post('/logout')
    logout(): string {
        return 'This action returns one cats';
    }

      @Put('/:id/update')
    update(): string {
        return 'This action returns one cats';
    }

       @Get('/me')
    auth(): string {
        return 'This action returns one cats';
    }
}
