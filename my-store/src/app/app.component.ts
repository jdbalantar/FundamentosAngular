import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'David';
  age = 23;
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  btnDisabled = true;

  person = {
    name: "David",
    age: 23,
    avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
  }

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
}
