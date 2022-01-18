import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RemoteEntryComponent } from './entry.component';
import { UiKitAngularModule } from '@frontend/ui-kit-angular';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    FormsModule,
    UiKitAngularModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
