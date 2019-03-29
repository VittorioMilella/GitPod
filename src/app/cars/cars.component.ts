import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {

  cars = CARS;
  selectedCar: Car;

  constructor() { }

  ngOnInit() {
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  onAddCar(id: HTMLInputElement,nome: HTMLInputElement,costo: HTMLInputElement,consumo: HTMLInputElement)
  {
      let auto : Car = new Car();
      auto.id = Number( id.value);
      auto.name = nome.value;
      auto.costo = Number (costo.value);
      auto.consumo = Number(consumo.value);

      this.cars.push(auto);
  }
}

