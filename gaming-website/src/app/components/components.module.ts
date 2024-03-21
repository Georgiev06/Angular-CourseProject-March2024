import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
