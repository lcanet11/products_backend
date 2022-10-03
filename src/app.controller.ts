import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';


//you-domain.com/products
//you can pass something into controller for it to access controllers: eg @Controller(products)

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-type', 'text/html')
  getHello(): {name: string} {
    return {name: 'Max'}
  }
}
