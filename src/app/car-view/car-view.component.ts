import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';
import { CarsComponent } from '../cars/cars.component';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {
  @Input() ciao : Car;
  constructor() { }

  ngOnInit() {
  }

  costUp(): Boolean {
    this.ciao.costo++;
    return false;
  }

  costDown(): Boolean {
    this.ciao.costo--;
    return false;
  }


  
}
