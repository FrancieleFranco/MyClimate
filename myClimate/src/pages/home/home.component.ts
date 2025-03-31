import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputValue: string = ''
  mensagem: string = '';

  searchButton() {
  /*  this.mensagem = `Você digitou: ${this.inputValue}`;*/
    console.log(this.inputValue)
  }
  }

