export class Empleado {
    id: number;
    nombre: string;
    ruc: number;
    razon: string;
    telefono: number;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.ruc = null!;
        this.razon = '';
        this.telefono = null!;
    }
}
