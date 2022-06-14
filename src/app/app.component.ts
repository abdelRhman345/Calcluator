import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  res = '';
  getAction(item: any) {
    this.res += item;
    console.log(item);
  }
  //
  equal() {
    this.res = eval(this.res).toFixed(2);
  }
  //
  reset() {
    this.res = '';
  }
}
