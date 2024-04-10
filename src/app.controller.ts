import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//() bao hieu  dug ham nay
export class AppController {
  constructor(private readonly appService: AppService) { }

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
