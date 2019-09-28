import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MappingService } from 'src/app/services/mapping.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
   placeList: any;
  constructor(navParams: NavParams,public modalController: ModalController,private mappingService: MappingService) {
    this.placeList = navParams.data.placeData;
   }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  deleteMapping(mapId,mapIndex){
    this.mappingService.deletetMapping({ deleteId: mapId }).subscribe((response) => {
      if (parseInt({ ...{ ...response }.raw }.affectedRows) > 0) {
        if (parseInt(this.placeList.length) > 1) {
          this.placeList.splice(mapIndex, 1);
        } else {
          this.placeList = [];
        }
      }
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

}
