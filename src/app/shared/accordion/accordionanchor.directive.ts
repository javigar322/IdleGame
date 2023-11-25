import { Directive, Inject, HostListener } from '@angular/core';
import { AccordionLinkDirective } from './accordionlink.directive';

@Directive({
  selector: '[appAccordionanchor]',
  standalone: true,
})
export class AccordionanchorDirective {
  protected navlink: AccordionLinkDirective;
  constructor(@Inject(AccordionLinkDirective) navlink: AccordionLinkDirective) {
    this.navlink = navlink;
  }
  @HostListener('click', ['$event'])
  onClick(e: any) {
    this.navlink.toggle();
  }
}
