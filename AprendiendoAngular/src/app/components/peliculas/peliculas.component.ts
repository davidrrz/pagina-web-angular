import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula} from '../../models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';



@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;

  constructor(
    private _peliculaService: PeliculaService
  ){
    
    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();


   }

  ngOnInit() {
    console.log("Componente iniciado")
  }
  ngDoCheck(){
    console.log("DoCheck Cargado")
    
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar")
    
  }

  


}
