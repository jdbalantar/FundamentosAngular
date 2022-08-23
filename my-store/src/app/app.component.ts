import { Component } from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'David';
  age = 23;
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  btnDisabled = true;

  person = {
    name: "David",
    age: 23,
    avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
  }


  newName = "";
  names : string[] = ["David", "Felipe", "Gina", "Carlina"];
  box = {
  	width:100,
    height:10,
    background: 'red'
  };

  register = {
    name: '',
    email: '',
    password: ''
  }



  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpeg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]


  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age++;
  }

  onScroll(event: Event){
    // Obtenemos el elemento HTML
    const element = event.target as HTMLElement;
    // Imprimimos en qué posicion está el Scroll
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.person.name);
    this.newName = "";
  }

  deleteName(index:number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }
}
