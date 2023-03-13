import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  @Input('photo')photo: any;
  @Input('position')position: any;
  
  sliderOpts = {
    zoom: true
  };
  constructor(private modalController: ModalController,public photoService: PhotoService) { }

  ngOnInit() { 
    //console.log('photo: ',this.position);
    //console.log('position: ',position);
  }
  public async deleteImage() {
    this.photoService.deletePicture(this.photo, this.position);
    this.modalController.dismiss();
  }
  close() {
    this.modalController.dismiss();
  }
}
