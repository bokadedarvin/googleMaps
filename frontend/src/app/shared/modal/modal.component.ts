import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MappingService } from 'src/app/services/mapping.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
   placeList: any;
  constructor(navParams: NavParams,public modalController: ModalController,private mappingService: MappingService,public alertController: AlertController) {
    this.placeList = navParams.data.placeData;
   }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
  async deleteMappingConfirm(mapId,mapIndex) {
    const alert = await this.alertController.create({
      header: 'Delete Confirm!',
      message: 'Are you sure? You wants to delete this mapping!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteMapping(mapId,mapIndex);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteMapping(mapId,mapIndex){
    this.mappingService.deletetMapping({ deleteId: mapId }).subscribe((response) => {
      if (parseInt({ ...{ ...response }.raw }.affectedRows) > 0) {
        if (parseInt(this.placeList.length) > 1) {
          this.placeList.splice(mapIndex, 1);
        } else {
          this.placeList = [];
          this.dismiss();
        }
      }
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

}
