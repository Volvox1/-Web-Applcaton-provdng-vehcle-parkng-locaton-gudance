import { Component, OnInit } from '@angular/core';
import { CarInfos } from '../models/CarInfos';
import { CarServiceService } from '../services/CarService.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CarInfoss:CarInfos[]=[];
  CarInfoss2:CarInfos[]=[];
  constructor(private CarService:CarServiceService,private authService:AuthService) { }

  ngOnInit() {
    this.CarService.GetAllCarInfoss().subscribe(CarInfoss=>{
   next: this.CarInfoss=CarInfoss;
   


    });
    
      
      

      
    
    
  }
  get isAuthenticated(){
    return this.authService.loggedIn();
   }

}
