import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'storybook-image',
  imports: [CommonModule],
  template: ` <img src="{{src}}" style="width:200px; height:200px;"/>`
})
export default class ImageComponent {
 
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  src?: string;
  


  public get classes(): string[] {

    return ['storybook-image'];
  }
}
