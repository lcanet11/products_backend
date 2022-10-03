import {Controller, Post, Body} from '@nestjs/common';
import {Get} from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller()
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number, 
    ): any {
        const generatedId = this.productsService.insertProduct(
            prodTitle, 
            prodDesc, 
            prodPrice
            ); 
        return {id: generatedId}
    }

    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }
}