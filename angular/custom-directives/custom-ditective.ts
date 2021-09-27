import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  hasView: boolean = false;

  constructor(private templateREf: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateREf)
      this.hasView = true
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}


// <div class="custom">
//     <h3 *appUnless="false"> This value is diplayed from appUnless directive</h3>
// </div>