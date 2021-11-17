import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  students = [
    { name: 'pravit', tel: '08454845', id: 1 },
    { name: "prayod", tel: '084848455', id: 2 }
  ];
  name = '';
  tel = '';
  constructor() {

    
  }
  add_item(tel) {
    this.students.push({ name: this.show_text(), tel: tel, id: 5 });
    this.name = '';
    this.tel = '';
    let a = '';
  }
  show_text() {
    return "ff";
  }
  demo() {

  }

}
