import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'home-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  username: string = '';
  password: string = '';
user: any;


constructor(private router:Router){}


  onSubmit() {

    if (this.username === 'admin' && this.password === '1234') {
     this.router.navigateByUrl('home')

    } else {
      alert('Credenciais inválidas');
    }
  }
}

