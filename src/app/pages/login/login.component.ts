import { Component } from '@angular/core';
import {DefaultAuthLayoutComponent} from "../../components/default-auth-layout/default-auth-layout.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultAuthLayoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
