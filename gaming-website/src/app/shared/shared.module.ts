import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validations/email.directive';

@NgModule({
  declarations: [EmailDirective],
  imports: [RouterModule],
  exports: [EmailDirective],
})
export class SharedModule {}