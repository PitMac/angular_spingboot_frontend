import { Prestamo } from './prestamo';

export interface Devoluciones {
  id: number | null;
  fechaRetorno: Date;
  idPrestamo: number;
}
