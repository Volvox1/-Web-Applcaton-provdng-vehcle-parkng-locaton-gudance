import { Component, OnInit } from '@angular/core';
import { CarInfos } from '../models/CarInfos';
import { CarServiceService } from '../services/CarService.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-addcarinfo',
  templateUrl: './addcarinfo.component.html',
  styleUrls: ['./addcarinfo.component.css']
})
export class AddcarinfoComponent implements OnInit {
  CarInfoss:CarInfos[]=[];
  AddCarInfo:CarInfos ={
    carId: 0,
    carPlate: '',
    carOwner:'',
    typeofCar:'',
    dateofJoining:'',
    parkingLotNumber:'',
    residencetime:'',


  };
  constructor(private CarService:CarServiceService,private router:Router,private authService:AuthService) { }
   random:number;
   i:number;
  ngOnInit(): void {
    

     this.CarService.GetAllCarInfoss().subscribe(CarInfoss=>{
   next: this.CarInfoss=CarInfoss;
   console.log(CarInfoss[0]);


    });
  }

  Addcarinfo(){

    if(this.AddCarInfo.carPlate.length<7 || this.AddCarInfo.carPlate.length>8){
      alert("Car plate must be 7 or 8 long");
    
     return;
    }
    if(this.AddCarInfo.typeofCar!='disabled' && this.AddCarInfo.typeofCar!='normal')
    {
      alert("Car type must be disabled or normal");
return;
    }
    if(!this.AddCarInfo.dateofJoining.includes('.')){
      alert("Please type date in this format gg.aa.yyyy")
      return;
    }
    
    if(this.AddCarInfo.residencetime!='short'&& this.AddCarInfo.residencetime!='long'){
      alert("Residence time must be short or long");
      return;
    }
    
    if(this.AddCarInfo.typeofCar=='disabled'){
      this.AddCarInfo.parkingLotNumber='659';

      for(this.i=0;this.i<this.CarInfoss.length;this.i++){
        if(this.CarInfoss[this.i].parkingLotNumber=='659'){
          this.AddCarInfo.parkingLotNumber='649';
          
    
        }}
        for(this.i=0;this.i<this.CarInfoss.length;this.i++){
        if(this.CarInfoss[this.i].parkingLotNumber=='649'){
          this.AddCarInfo.parkingLotNumber='654';
         
    
        }}
        for(this.i=0;this.i<this.CarInfoss.length;this.i++){
          if(this.CarInfoss[this.i].parkingLotNumber=='654'){
            
            alert("There is no parking lot left");
      return;
          }}
          
      
    }
    if(this.AddCarInfo.typeofCar=='normal'&& this.AddCarInfo.residencetime=='long'){
      this.random=Math.floor(Math.random()*15+649);
      if(this.random==654){
        this.random=this.random+1;
      }
      if(this.random==649){
        this.random=this.random+1;
      }
      if(this.random==659){
        this.random=this.random+1;
      }
      this.AddCarInfo.parkingLotNumber=this.random.toString();
      alert("Your parking lot number is " + this.random);
    }
    if(this.AddCarInfo.typeofCar=='normal'&& this.AddCarInfo.residencetime=='short'){
      this.random=Math.floor(Math.random()*38+606);
      if(this.random==654){
        this.random=this.random+1;
      }
      if(this.random==649){
        this.random=this.random+1;
      }
      if(this.random==659){
        this.random=this.random+1;
      }
      this.AddCarInfo.parkingLotNumber=this.random.toString();
      alert("Your parking lot number is " + this.random);
    }

    
   
   
    this.CarService.addcarinfo(this.AddCarInfo).subscribe({
      next: carinfo=>{
        this.router.navigate(['home'])
       
      }
    });

  }
  get isAuthenticated(){
    return this.authService.loggedIn();
   }

}
