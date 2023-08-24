import { Component, OnInit } from '@angular/core';
import { DevolucionService } from '../services/devolucion.service';
import { Usuario } from '../dto/usuario';
import { Libro } from '../dto/libro';
import { DatePipe } from '@angular/common';
import { Prestamo } from '../dto/prestamo';
import { Devoluciones } from '../dto/devolucion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.component.html',
  styleUrls: ['./devolucion.component.css'],
})
export class DevolucionComponent implements OnInit {
  id: string | null = '';
  prestamos: Prestamo[] = [];

  selectedOption = '';

  constructor(
    private devolucionService: DevolucionService,
    private datePipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formatDate() {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    return formattedDate;
  }

  guardarDevolucion() {
    if (this.selectedOption === '') {
      return;
    }
    if (this.id !== null) {
      this.devolucionService
        .updateDevoluciones(
          {
            idPrestamo: parseInt(this.selectedOption, 10),
            fechaRetorno: this.formatDate()!,
          },
          parseInt(this.id, 10)
        )
        .subscribe((data: Prestamo[]) => {
          this.router.navigate(['/']);
        });
    } else {
      this.devolucionService
        .postDevoluciones({
          idPrestamo: parseInt(this.selectedOption, 10),
          fechaRetorno: this.formatDate()!,
        })
        .subscribe((data: Prestamo[]) => {
          this.router.navigate(['/']);
        });
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.devolucionService.getPrestamos().subscribe(
      (data: Prestamo[]) => {
        this.prestamos = data;
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }
}
