import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  lat = -25.2968361;
  lng = -57.6681294;

  marcadores: Marcador[] = [];

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit(): void {}

  agregarMarcador(event) {
    const coords: { lat: number; lng: number } = event.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();
  }

  borrarMarcador(index: number) {
    this.marcadores.splice(index, 1);

    this.guardarStorage();

    this.snackBar.open('Marcador borrado', 'borrar', {
      duration: 2000,
    });
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();

      this.snackBar.open('Marcador actualizado', 'actualizado', {
        duration: 3000,
      });
    });
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    //mostrar mensaje con angular material
    this.snackBar.open('Marcador guardado', 'guardar', {
      duration: 2000,
    });
  }
}
