import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { InnerComponent } from '../inner/inner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private activated: any;
  constructor(
    private location: ViewContainerRef
  ) { }

  ngOnInit(): void {
  }

  create() {
    if (this.activated) {
      return;
    }
    this.activated = this.location.createComponent(InnerComponent, { index: this.location.length });
  }

  destroy() {
    if (this.activated) {
      this.activated.destroy();
      this.activated = undefined;
    }
  }

}
