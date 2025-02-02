import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';
import { AutoScrollDirective } from '../auto-scroll.directive';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  @ViewChild(AutoScrollDirective) autoScrollDirective!: AutoScrollDirective;
  image: any =[];
  images: any =[];
  res_flag:any;
  Img_id:number=0;
  upLoadFile: File |null=null;

  constructor(private _service:ServicesService){}

  ngOnInit (){
    this.getAllImages();
  }

  
  
  public getImageById(){

      this._service.getImageById(this.Img_id).subscribe
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

  public getAllImages(){
    this._service.getImages().subscribe
    (Response=>{
      this.images=Response;
    })
  }

  public moveLeft() {
    if (this.autoScrollDirective) {
      this.autoScrollDirective.moveLeft(); 
    }
  }

  public moveRight() {
    if (this.autoScrollDirective) {
      this.autoScrollDirective.moveRight(); 
    }
  }

  public UploadFile() {
    if (this.upLoadFile === null) {
      console.error('No file selected.');
      alert('Please select a file to upload.');
      return;
    }
  
    console.log(this.upLoadFile);
  
    this._service.uploadImage(this.upLoadFile).subscribe(
      (response) => {
        console.log('Upload successful:', response);
      },
      (error) => {
        console.error('Upload failed:', error);
      }
    );
  }
  
}
