export class Cuestionario{

    id?: number;
    nombre!: string;
    descripcion!: string;
    fechaCreacion!: Date;
    Descripcion!: string

    constructor(nombre: string, descripcion: string, fechaCreacion: Date){

            this.nombre = nombre;
            this.descripcion = descripcion;
            this.fechaCreacion = fechaCreacion;
          

        }

       

}   