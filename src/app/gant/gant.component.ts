import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gant',
  templateUrl: './gant.component.html',
  styles: [`
    .row-accessories {
      background-color: rgba(0, 0, 0, .15) !important;
    }
  `
  ]
})
export class GantComponent implements OnInit {
  public collection: any[] = []
  columns: any[] = [];
  times: any[] = [];

  constructor() {
  }

  ngOnInit() {
    // lista di 24 elementi, uno per ogniora
    this.times = Array.from({length: 24}, (v, i) => i)
    // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

    // trasforma un numero nel formato 00:00 da stampare come titolo delle colonne
    const renderColName = (val: number) => ('' + val).length === 1 ? `0${val}:00` : `${val}:00`;
    this.columns = this.times.map(renderColName)
    // ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]

    // lisa degli orari da stampae
    const list = [
      {from: 2, to: 3},
      {from: 3, to: 8},
      {from: 4, to: 10},
      {from: 8, to: 23},
      {from: 1, to: 3},
      {from: 4, to: 22},
      {from: 2, to: 11}
    ];

    const toObj = (value: { from: number, to: number }) => this.times.reduce((prev: any, curr: number) => {
      prev[curr] = curr>=value.from && curr<=value.to;
      return prev
    }, {})
    this.collection = list.map((v, i) => toObj(v))

  }

}

