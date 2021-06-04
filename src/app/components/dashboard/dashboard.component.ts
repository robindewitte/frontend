import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostDTO} from "src/app/helpers/dto/postDTO";
import {PostService} from "src/app/services/post.service";
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model: any = {};
  ErrorMessage = "";
  messages: Array<PostDTO> = [];
  messagesStrings: Array<String> = [];
  searchModel: any = {};

  constructor(private postService: PostService) { }


  //ben wel bekend met het feit dat iemand met gebruikersnaam FOUT! altijd een error aanroept ik neem dat verlies voor nu
  //makkelijk op te lossen door tekens uit namen te halen
  ngOnInit(): void {
    this.postService.getUserMessages(localStorage.getItem("username")).subscribe(
      data => {
        if(data != null ){
          this.messages = data;
          this.messages.forEach(message => this.messagesStrings.push(message.postMessage + message.postMessage + message.username));
          console.log(this.messagesStrings);
        }else{
          this.ErrorMessage = "geen berichten gevonden";
        }   
      },
      error => {
        this.ErrorMessage = "Something went wrong! Check your internet connection";
      });
  }

  postMessage(){
    let dto = new PostDTO();
    dto.postMessage = this.model.postMessage;
    dto.hashtag = this.model.hashtag;
    dto.username = localStorage.getItem("username");
    this.postService.postMessage(dto).subscribe(
      data => {
        if(data.includes("FOUT!") ){
          alert(data);
        }else{
          this.ErrorMessage = "geplaatst";
        }   
      },
      error => {
        this.ErrorMessage = "Something went wrong! Check your internet connection";
      });
  }

  searchMessage(){
      this.postService.getMessages(this.searchModel.searchMessage).subscribe(
        data => {
          if(data.response != null ){
            this.messages = data;
          }else{
            this.ErrorMessage = "geen berichten gevonden";
          }   
        },
        error => {
          this.ErrorMessage = "Something went wrong! Check your internet connection";
        });
  }

}
