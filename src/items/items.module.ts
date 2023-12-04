import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { Item } from './entities/item.entity';
import { CreateItemInput } from './dto/inputs';

@Module({
  providers: [
    ItemsResolver, 
    ItemsService,
    CreateItemInput,
    Item
  ],
  imports: [
    TypeOrmModule.forFeature([ Item ])
  ]
})
export class ItemsModule {}
