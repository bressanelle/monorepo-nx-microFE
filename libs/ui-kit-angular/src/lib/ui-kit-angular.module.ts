import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from '../generated/directives/proxies';

const DECLARATIONS = [MyComponent];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
})
export class UiKitAngularModule {}
