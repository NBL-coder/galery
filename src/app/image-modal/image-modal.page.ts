import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  @Input('photo')photo: any;
  sliderOpts = {
    zoom: true
  };
  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  close() {
    this.modalController.dismiss();
  }
}
