import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()//() bao hieu  dug ham nay
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly configService: ConfigService
  ) { }

  @Get()
  @Render("home")
  handleHomePage() {
    const message = this.appService.getHello()
    // return "this.appService.getHello()";
    return {
      message: message
    }
  }
}
