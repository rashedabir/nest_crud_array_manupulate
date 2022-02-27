import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCatList() {
    return this.catsService.getCats();
  }

  @Get(':id')
  getSingleCatItem(@Param('id') id: string) {
    return this.catsService.getSingleCat(id);
  }

  @Post()
  createCarItem(@Body('name') name: string) {
    return this.catsService.createCats(name);
  }

  @Put(':id')
  updatCat(@Param('id') id: string, @Body('name') name: string) {
    return this.catsService.updateCat(id, name);
  }

  @Delete(':id')
  deleteCat(@Param('id') id: string) {
    return this.catsService.deleteUser(id);
  }
}
