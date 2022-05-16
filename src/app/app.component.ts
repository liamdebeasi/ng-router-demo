import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { InnerComponent } from './inner/inner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private activated: any;
  constructor(
    private location: ViewContainerRef
  ) { }

  ngOnInit(): void {
  }

  create() {
    this.activated = this.location.createComponent(InnerComponent, { index: this.location.length });
  }

  destroy() {
    if (this.activated) {
      this.activated.destroy();
      this.activated = undefined;
    }
  }
}
