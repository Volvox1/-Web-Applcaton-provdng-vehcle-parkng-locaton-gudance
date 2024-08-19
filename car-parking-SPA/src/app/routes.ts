import { AddcarinfoComponent } from "./addcarinfo/addcarinfo.component";
import { EditcarinfoComponent } from "./editcarinfo/editcarinfo.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { RegisterComponent } from "./register/register.component";
import {Routes} from "@angular/router"

export const appRoutes: Routes = [
    {path:"home",component:HomeComponent},
{path:"register",component:RegisterComponent},
{path:"addcarinfo",component:AddcarinfoComponent},
{path:"editcarinfo/edit/:carId",component:EditcarinfoComponent},
{path:"**",redirectTo:"home",pathMatch:"full"}
];

