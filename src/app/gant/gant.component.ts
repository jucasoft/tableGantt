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
    this.times = Array.from({length: 24}, (v, i) => i)
    const renderColName = (val: number) => ('' + val).length === 1 ? `0${val}:00` : `${val}:00`;
    this.columns = this.times.map(renderColName)
    const toObj = (value: { from: number, to: number }) => this.times.reduce((prev: any, curr: number) => {
      prev[curr] = curr>=value.from && curr<=value.to;
      return prev
    }, {})
    const list = [
      {from: 2, to: 3},
      {from: 3, to: 8},
      {from: 4, to: 10},
      {from: 8, to: 23},
      {from: 1, to: 3},
      {from: 4, to: 22},
      {from: 2, to: 11}
    ];
    this.collection = list.map((v, i) => toObj(v))
  }

}

