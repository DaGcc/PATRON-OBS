import { Component, Input, OnInit } from '@angular/core';
import { SujetoService } from 'src/app/service/sujeto.service';

@Component({
  selector: 'app-pagestwo',
  templateUrl: './pagestwo.component.html',
  styleUrls: ['./pagestwo.component.css']
})
export class PagestwoComponent implements OnInit {

  // @Input()
  val : string = "soy page 2";

  constructor(private sujetoService : SujetoService) { }

  ngOnInit(): void {
    this.sujetoService.sujeto.subscribe({ next : ( data : string ) =>  this.val = data })
  }

}
