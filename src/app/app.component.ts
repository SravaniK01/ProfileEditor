import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = { name:' Raja',age:30, favoriteColor:'blue'}
  title:string = 'User Information'
  
  formUser: User = {
    name:' Raja',age:30, favoriteColor:'blue'
  }

  displayEdit:boolean = false;

  toggleEdit() :void{
    this.displayEdit = !this.displayEdit;
    if(this.displayEdit)
    this.title = 'Updated User Information'
    else
    this.title = 'User Information'
  }

  saveChanges(): void {
    this.user.name = this.formUser.name;
    this.user.age = this.formUser.age;
    this.user.favoriteColor = this.formUser.favoriteColor;

  }
}
