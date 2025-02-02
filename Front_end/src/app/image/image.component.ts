import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

  images:any = [];
  image: any =[];
  img_id:number=0;
  res_flag:any;

  constructor(private _service:ServicesService){}

  public onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this._service.uploadImage(file).subscribe(response => {
      });
    }
  }

  public getImages() {
    this._service.getImages().subscribe(images => {
      this.images=images;
    });
  }

  public getImageById(){
     this._service.getImageById(this.img_id).subscribe
     (response=>{
       this.image=response;
       this.res_flag=1;
     },
     error => {
      this.image=error;
      console.error('abin your error:', error);
    }
    );
  }
}
