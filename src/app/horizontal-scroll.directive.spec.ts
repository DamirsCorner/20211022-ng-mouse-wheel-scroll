import { ElementRef } from '@angular/core';
import { HorizontalScrollDirective } from './horizontal-scroll.directive';

describe('HorizontalScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new HorizontalScrollDirective(
      jasmine.createSpyObj<ElementRef>([], ['nativeElement'])
    );
    expect(directive).toBeTruthy();
  });
});
