import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngbd-tooltip-container',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.css']
})
export class NgbdTooltipContainer {
  name = 'World';

}
