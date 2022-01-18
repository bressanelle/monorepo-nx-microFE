import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from '../generated/directives/proxies';
import {defineCustomElements} from '@frontend/ui-kit/loader'

const DECLARATIONS = [MyComponent];

defineCustomElements(window)

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
})
export class UiKitAngularModule {}
