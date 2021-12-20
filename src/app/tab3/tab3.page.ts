import { Component } from '@angular/core';
import { Plugins} from '@capacitor/core'
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera'//カメラを使う

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  photo;
  constructor() {}

  
    async takePicture(){
     const image = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
    });
    this.photo = image.dataUrl;
  }
}