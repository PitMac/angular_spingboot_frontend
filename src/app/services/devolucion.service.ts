import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from '../dto/prestamo';
import { Devoluciones } from '../dto/devolucion';

@Injectable({
  providedIn: 'root',
})
export class DevolucionService {
  private http = inject(HttpClient);

  getDevoluciones(): Observable<any> {
    return this.http.get('http://127.0.0.1:8080/api/v2/devoluciones');
  }

  deleteDevoluciones(id: number): Observable<any> {
    return this.http.delete('http://127.0.0.1:8080/api/v2/devoluciones/' + id);
  }
  postDevoluciones(data: any): Observable<any> {
    console.log(
      this.http.post('http://127.0.0.1:8080/api/v2/devoluciones/', data)
    );

    return this.http.post('http://127.0.0.1:8080/api/v2/devoluciones', data);
  }
  updateDevoluciones(data: any, id: number): Observable<any> {
    console.log(
      this.http.put('http://127.0.0.1:8080/api/v2/devoluciones/' + id, data)
    );

    return this.http.put(
      'http://127.0.0.1:8080/api/v2/devoluciones/' + id,
      data
    );
  }

  getPrestamos(): Observable<any> {
    return this.http.get('http://127.0.0.1:8080/api/v2/prestamos');
  }
}
