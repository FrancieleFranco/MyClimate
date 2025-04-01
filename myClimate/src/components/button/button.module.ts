import { EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class ButtonModule {
  @Input() labelButton: string = '';
}

