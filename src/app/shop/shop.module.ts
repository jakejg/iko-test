import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [ProductListComponent, ShopComponent],
  imports: [CommonModule, ShopRoutingModule, TranslateModule],
})
export class ShopModule {}
