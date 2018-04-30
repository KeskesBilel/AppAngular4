import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info = {
    nom: "bilel",
    email:"bilelkeskes1@gmail.com",
    tel : "02568"
  
} 
commentaire = {data:null,message:""}
comments =[
    {
      data :new Date(),message:"aaa"
    },
    {
      data :new Date(),message:"bbb"
 },
    {
      data :new Date(),message:"ccccc"  }
]

OnAddCommt(c){
c.data = new Date();
this.comments.push(c);

}
  constructor() { }

  ngOnInit() {
  }


}
