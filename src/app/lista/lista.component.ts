import { Component, OnInit } from '@angular/core';
import { DevolucionService } from '../services/devolucion.service';
import { Devoluciones } from '../dto/devolucion';
import { Router } from '@angular/router';
import { Prestamo } from '../dto/prestamo';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  devoluciones: Devoluciones[] = [];

  constructor(
    private devolucionService: DevolucionService,
    private router: Router
  ) {}

  deleteDevolucion(id: number) {
    this.devolucionService.deleteDevoluciones(id).subscribe((data) => {
      this.devolucionService.getDevoluciones().subscribe(
        (data) => {
          this.devoluciones = data;
        },
        (error) => {
          console.error('Error ', error);
        }
      );
    });
  }

  changeDevolucion(id: number) {
    this.router.navigate(['/devolucion', id]);
  }

  ngOnInit(): void {
    this.devolucionService.getDevoluciones().subscribe(
      (data) => {
        this.devoluciones = data;
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }
}
