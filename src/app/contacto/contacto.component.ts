import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombrectrl = new FormControl('' ,[], [])

formularios:any[]=[
  {
    name:"nombre",
    etiqueta:"Nombre"
  },

  {
    name:"asunto",
    etiqueta:"Asunto",
 
  },

  {
    name:"email",
    etiqueta:"Email"
  },

  {
    name:"mensaje",
    etiqueta:"Mensaje"
  }


]








  constructor(public _MessageService: MessageService) { }

contactForm(form){
  this._MessageService.sendMessage(form).subscribe(()=> {
    alert("Mensaje enviado correctamente")
  });

}

contactforma(){
  alert("Mensaje Enviado")
}
  ngOnInit(): void {
  }

}
