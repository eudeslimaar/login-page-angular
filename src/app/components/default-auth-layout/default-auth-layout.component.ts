import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-auth-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-auth-layout.component.html',
  styleUrl: './default-auth-layout.component.scss'
})
export class DefaultAuthLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = false;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
  navigate() {
    this.onNavigate.emit();
  }
}
 