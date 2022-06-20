import { Injectable} from "@angular/core";
import {Pelicula} from "../models/pelicula";

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];


    constructor(){
            this.peliculas=[
            new Pelicula("Spiderman 4", 2019, 'https://blogs.elpais.com/.a/6a00d8341bfb1653ef01348215131f970c-pi'),
            new Pelicula("Los vengadores Endgame", 2020, 'https://pics.filmaffinity.com/Vengadores_Endgame-135478227-large.jpg'),
            new Pelicula("Batman vs Superman", 2014, 'https://blogs.elpais.com/.a/6a00d8341bfb1653ef01348215131f970c-pi'),
            new Pelicula("Batman vs Superman 2", 2014, 'https://blogs.elpais.com/.a/6a00d8341bfb1653ef01348215131f970c-pi'),


        ];
    }
    holaMundo(){
        
    }
    getPeliculas(){
        return this.peliculas;

    }

}
