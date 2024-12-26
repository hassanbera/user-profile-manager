import { Component } from '@angular/core';
import{User} from './user'
@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
user:User;

constructor() {
  this.user= new User("Ebru Sener","ebrussener@hotmail.com",24)
}

updateName(newName:string):void {
  this.user.setName(newName);
}

updateEmail(newEmail:string):void{
  this.user.setEmail(newEmail);
}

updateAge(newAge:string):void{
  try{
    this.user.setAge(Number(newAge))
  }catch(error) {
    console.log((error as Error).message)
  }
}


}
