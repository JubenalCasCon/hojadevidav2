import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

imagenprueba:string="assets/Imagenes/computadoraportatil.jpg"
cportada:string[]=["italic", "text-3xl", "bg-cover", "flex", "justify-center", "items-center", "flex-col", "text-center", "text-white", "bg-center"]
cboton:string[]=["rounded-full", "py-2", "px-4", "text-2xl"]
  constructor() { }

  ngOnInit(): void {
  }

}
