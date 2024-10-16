import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Car } from '../../model/car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent implements OnInit{

  carObj: Car = new Car();
  carList: Car[] = [];
  localKeyName: string = 'rentalCar';
  isSidePanelVisible: boolean = false;

  ngOnInit(): void {
    debugger;
      const localData = localStorage.getItem(this.localKeyName);
      if(localData != null){
        this.carList = JSON.parse(localData);
      }
    }
    
    onSaveCar() {
      debugger;
      if (this.carObj.carId == 0) {
        this.carObj.carId = this.carList.length + 1;
        this.carList.unshift(this.carObj);
        localStorage.setItem(this.localKeyName,JSON.stringify(this.carList));
        this.carObj = new Car();
      }
  }

  onReset() {
    this.carObj = new Car();
    this.carList = [];
  }

}
