import { Component } from '@angular/core';
import { Artista } from './artista.model';
import {Documento} from '../app/models/documento.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg=10;
  title = 'angular';
  numero= 50;
  img='https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg?region=0%2C0%2C540%2C810';
  btnD=true;
  person= {
    nombre:'Susana',
    edad:25,
    avatar:'https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg?region=0%2C0%2C540%2C810'
  };

  nombres: string[]=['Susana','Estiven','Guigui'];
  nuevoNombre='';

  box={
    width:50,
    height:50,
    background:'black'
  };

  /*para crear el objeto sin agrgar nada se pone comillas (vacio)*/
  form={
    nombre: '',
    correo: '',
    contrasena: ''
  }

  artistas: Artista[] =[
    {
      artista: 'Imagine Dragons',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/iamgine.jfif?alt=media&token=ab4746b6-b976-4370-b371-a81ab8bebad7',
      tiempoMercado: 15,
      genero: 'alternativa'
    },
    {
      artista: 'Calvin Harris',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/calvin-harris.jpg?alt=media&token=c17af316-5b41-4f59-a980-97f4bb355b2b',
      tiempoMercado: 21
    },
    {
      artista: 'Gorillaz',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/CREADOR.png?alt=media&token=8cc1cece-bdce-4277-9ee3-ec18e56de701',
      tiempoMercado: 25
    }
  ];

  docs: Documento ={
    codigoBarrasDocumento:'00077047890005278749',
    documento:'FISICO',
    pesoRealDocumento: '1',
    tipoDocumento:'FACTURA',
    numeroDocumento: '439820837',
    fechaDocumento: '09/03/0023',
  }

  llenarDetalleDocumentos(docs:any){
    
  }

  cambioBoton(){
    this.btnD=!this.btnD;
  }

  incrementoEdad(){
    this.person.edad +=1;
  }

  desplazamiento(evento: Event){
    const elemento=evento.target as HTMLElement;
    console.log(elemento.scrollTop);
  }

  cambioNombre(evento: Event){
    const elemento=evento.target as HTMLInputElement;
    this.person.nombre=elemento.value;
  }

  agregarNombre(){
    this.nombres.push(this.nuevoNombre);
    this.nuevoNombre='';
  }

  eliminarNombre(index:number){
    this.nombres.splice(index,1)
  }
  /*el index es la posicion que se quiere eliminar y el numero 1 es
  cuantos elemnentos quiero eliminar a partir de esa posicion,
  eneste caso solo 1*/

  seRegistra(){
    console.log(this.form)
  }
}



