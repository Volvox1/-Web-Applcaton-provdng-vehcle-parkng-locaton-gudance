import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../services/CarService.service';
import { CarInfos } from '../models/CarInfos';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-editcarinfo',
  templateUrl: './editcarinfo.component.html',
  styleUrls: ['./editcarinfo.component.css']
})
export class EditcarinfoComponent implements OnInit {

  CarDetails:CarInfos={
    carId: 0,
    carPlate: '',
    carOwner:'',
    typeofCar:'',
    dateofJoining:'',
    parkingLotNumber:'',
    residencetime:'',

  };

  constructor(private route:ActivatedRoute,private Carinfoservice:CarServiceService,private router:Router,private authService:AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (params)=>{
        const carId = params.get('carId');
        if(carId){
this.Carinfoservice.getcarinfo(carId)
.subscribe({
next: (response)=>{
this.CarDetails=response;
}
});
        }
      }
    })
  }
updatecarinfo(){
  if(this.CarDetails.carPlate.length<7 || this.CarDetails.carPlate.length>8){
    alert("Car plate must be 7 or 8 long");
  
   return;
  }
  if(this.CarDetails.typeofCar!='disabled' && this.CarDetails.typeofCar!='normal')
  {
    alert("Car type must be disabled or normal");
return;
  }
  if(!this.CarDetails.dateofJoining.includes('.')){
    alert("Please type date in this format gg.aa.yyyy")
    return;
  }
  if(this.CarDetails.residencetime!='short'&& this.CarDetails.residencetime!='long'){
    alert("Residence time must be short or long");
    return;
  }
  this.Carinfoservice.updatecarinfo(this.CarDetails.carId,this.CarDetails)
  .subscribe({
    next: (response)=>{
      this.router.navigate(['home'])
    }
  });

}
deletecarinfo(carId:number){
this.Carinfoservice.deletecarinfo(carId).subscribe({
next: (response)=>{
  this.router.navigate(['home'])
}
});
}
get isAuthenticated(){
  return this.authService.loggedIn();
 }

}
