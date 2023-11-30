import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccordionDirective,
  AccordionLinkDirective,
  AccordionanchorDirective,
} from './accordion';
import { MenuItems } from '../core/models/menu-items';
import { CardItems } from '../core/models/card-items';
import { BuffItems } from '../core/models/buff-items';

@NgModule({
  declarations: [],
  imports: [
    AccordionDirective,
    AccordionLinkDirective,
    AccordionanchorDirective,
  ],
  exports: [
    AccordionDirective,
    AccordionLinkDirective,
    AccordionanchorDirective,
  ],
  providers: [MenuItems, CardItems, BuffItems],
})
export class SharedModule {}
