import { Component, OnInit } from '@angular/core';
import { GeneralService } from "src/app/service/general.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor(public generalService:GeneralService) { }

  ngOnInit() {
    this.generalService.get('getQuestionList').subscribe(response=>{
      console.log(response);
    })
  }

}
