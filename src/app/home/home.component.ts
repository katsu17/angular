import { Component, OnInit } from '@angular/core';
import { checkList } from '../models/checkLIst';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checkLists: checkList[] = [
    new checkList({
      checkList1: "名前記入ミス",
      checkList2: "苗字名前が逆",
      checkList3: "身分証と同じように表記ください",
      checkList4: "first name last name の順で記入ください",
      checkList5: "",
      checkList6: "",
      checkList7: "",
      checkList8: "",
      checkList9: "",
      checkList10: "",
      checkList11: "",
      checkList12: "",
      checkList13: "",
      checkList14: "",
    }),
    new checkList({
      checkList1: "国籍が合ってない",
      checkList2: "身分証にて国籍照合出来ない場合",
      checkList3: "記入有効期限が間違っている",
      checkList4: "有効期限00/00/0000",
      checkList5: "有効期限が足りない",
      checkList6: "",
      checkList7: "",
      checkList8: "",
      checkList9: "",
      checkList10: "",
      checkList11: "",
      checkList12: "",
      checkList13: "",
      checkList14: "",
    }),
  ];

   i:string = "";

  checkList(){
    if ( this.i == "" ){  

  }}

  constructor() { }

  // image1() {
  //   document.getElementById("image"). = "../../assets/9332c513ef44b682e9347822c2e457acd195f595d6387add436d3370881c983buUwO94kloCX8QRHyw0jaSBWe6Vj2MkgcyxcEDQt2.jpg";
  // }

  ngOnInit() {
  }
}



// const images = [
//   "../../assets/9332c513ef44b682e9347822c2e457acd195f595d6387add436d3370881c983buUwO94kloCX8QRHyw0jaSBWe6Vj2MkgcyxcEDQt2.jpg",
//   "../../assets/security.svg",
//   "../../assets/speed.svg"];

//   const changeImage = function() {
//     if (selectImage === 1) {

//     }
//   }