import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { SujetoService } from 'src/app/service/sujeto.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  observador : Subscription = new Subscription() ;


  data :any[] = []
  sgtItems: number = 0;


  constructor (private sujetoService : SujetoService) {}

  //se ejecuta una vez nada mas
  ngOnInit(): void {
    
    this.sujetoService.obtenerData(this.sgtItems).subscribe({
      next: data => this.data = data
    })
     
  }

  anterior(){

  }
  siguiente(){
    
  }

}
