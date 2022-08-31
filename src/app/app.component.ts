
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:number=0;
  i:number=0;
  imageNo=1;
  imagePath:any="";
  abc(){
    
    setInterval(()=>{this.page()},1000); 
   
   
    }
page(){
  this.a++;
  if(this.a==5){

  if(this.imageNo<5){
    this.imageNo++;
  }
 else{
  this.imageNo=1;
 }

  
this.imagePath="assets/app1/img"+this.imageNo+".jpg"
this.a=0;
}

}

}