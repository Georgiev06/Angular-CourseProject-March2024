import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [SharedModule, CommonModule, UserRoutingModule, RouterModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot({})],
})
export class UserModule {}
