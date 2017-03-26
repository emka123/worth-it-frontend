import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-registration-bar',
  templateUrl: './registration-bar.component.html',
  styleUrls: ['./registration-bar.component.scss'],
  providers: [Modal]
})
export class RegistrationBarComponent implements OnInit {
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

 

  onClick() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Zaloguj')
        .body(`
            Login`)
        .open();
  }
  
  ngOnInit() {
  }

}
