import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {
  @Input() selectedCar : Car;
  constructor() { }

  ngOnInit() {
  }

  costUp(): Boolean {
    this.selectedCar.costo++;
    return false;
  }
  
  costDown(): Boolean {
    this.selectedCar.costo--;
    return false;
  }
}
