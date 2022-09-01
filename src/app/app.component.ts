
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
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
  new_item:any="";
  selectItemName:any="apple";
  whereToAdd:any="";
  msg:any="";
  position:any;
  n:any=0;
 
  list1:any=["apple","orange","mango","melon"];
  len:number = this.list1.length;
   add(){
    if(this.whereToAdd==1){
      
      // this.n++;
      for (let i = this.list1.length-1; i>=0; i--) {
       this.list1[i] = this.list1[i - 1];
      }
      this.list1[0] = this.new_item;
      
        
    }
    else if(this.whereToAdd==3){
      this.list1.push(this.new_item);

    }
    else if(this.whereToAdd==2){
      
     if(this.position<this.list1.length +1){

       this.list1.length++;
      for (let i = this.list1.length-1; i>=this.position; i--) {
       this.list1[i] = this.list1[i - 1];
      }
      this.list1[this.position-1] = this.new_item;
    
    }
    else{
      this.msg="Invalid position";
    }
   }
   
   }

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