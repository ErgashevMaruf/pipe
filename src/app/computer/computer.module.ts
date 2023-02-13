import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "../home/home-routing.module";
import { ComputerComponent } from "./computer.componen";


@NgModule({
    declarations:[ComputerComponent],
    imports:[CommonModule, HomeRoutingModule],
})
export class ComputerModule{}