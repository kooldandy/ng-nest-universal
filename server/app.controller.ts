import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './modules/auth/service/auth.service';
import { JwtAuthGuard } from './modules/auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from './modules/auth/guard/local-auth.guard';

import { Account } from './schema/listingsAndReviews.schema';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly authService: AuthService
    ) { }

    @Get('hello')
    async getData(): Promise<Account[]> {
        return this.appService.getData();
    }


    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
