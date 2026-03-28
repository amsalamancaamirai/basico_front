import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { MessageService } from 'primeng/api';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  respuesta: string = '';
  nombre: string = '';
  cargandoHola: boolean = false;
  cargandoSaludo: boolean = false;
  historial: { tipo: string; mensaje: string; hora: string }[] = [];

  constructor(private api: ApiService, private messageService: MessageService) {}

  llamarHolaMundo(): void {
    this.cargandoHola = true;
    this.api.getHolaMundo().subscribe({
      next: (res) => {
        this.respuesta = res.mensaje;
        this.agregarHistorial('GET /', res.mensaje);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: res.mensaje });
        this.cargandoHola = false;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo conectar al backend' });
        this.cargandoHola = false;
      }
    });
  }

  llamarSaludoPersonalizado(): void {
    if (!this.nombre.trim()) {
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Ingresa un nombre primero' });
      return;
    }
    this.cargandoSaludo = true;
    this.api.getSaludoPersonalizado(this.nombre).subscribe({
      next: (res) => {
        this.respuesta = res.mensaje;
        this.agregarHistorial(`GET /saludo/${this.nombre}`, res.mensaje);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: res.mensaje });
        this.cargandoSaludo = false;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo conectar al backend' });
        this.cargandoSaludo = false;
      }
    });
  }

  private agregarHistorial(endpoint: string, mensaje: string): void {
    const ahora = new Date();
    this.historial.unshift({ tipo: endpoint, mensaje, hora: ahora.toLocaleTimeString() });
    if (this.historial.length > 5) this.historial.pop();
  }

  limpiar(): void {
    this.respuesta = '';
    this.nombre = '';
    this.historial = [];
  }
}
