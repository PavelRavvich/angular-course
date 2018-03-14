import {NgModule} from '@angular/core';
import {ColorDirective} from './color.directive';

@NgModule({
  declarations: [ColorDirective],
  exports: [ColorDirective]
})
export class SharedModule {}
