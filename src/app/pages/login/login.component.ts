import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  twofa: any = '';


constructor(private router:Router){}


  onSubmit() {

    if (this.username === 'admin' && this.password === '1234') {
     this.router.navigateByUrl('home')

    } else {
      alert('Credenciais inválidas');
    }
  }
}

