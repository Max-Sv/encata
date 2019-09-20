import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private SHOW = 'Show profile';
  private HIDE = 'Hide profile';
  @Input() currentUser;
  public profileState = true;
  public textButton: string;
  @Output() onChanged = new EventEmitter<boolean>();
  change(): void {
    this.profileState = !this.profileState;
    this.textButton = this.profileState ? this.HIDE : this.SHOW;
    this.onChanged.emit(this.profileState);
  }

  constructor() {
    this.textButton = this.HIDE;
  }

  ngOnInit() {
  }

}
