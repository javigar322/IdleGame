import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccordionDirective,
  AccordionLinkDirective,
  AccordionanchorDirective,
} from './accordion';
import { MenuItems } from './menu-items/menu-items';

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
  providers: [MenuItems],
})
export class SharedModule {}
