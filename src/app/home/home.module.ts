import {NgModule} from '@angular/core'
import { HomeComponent } from './home.component'
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component'
import { HomeRoutingModule } from './home-routing.module';
import { PricePipe } from './pipes/price.pipe';
@NgModule({
    declarations:[HomeComponent, AboutComponent, PricePipe],
    imports:[CommonModule, HomeRoutingModule],
})

export class HomeModule{}