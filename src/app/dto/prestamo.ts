import { Libro } from './libro';
import { Usuario } from './usuario';

export interface Prestamo {
  id: number;
  fechaDesde: Date;
  fechaHasta: Date;
  idSocio: number;
  idLibro: number;
  activo: number;
}
