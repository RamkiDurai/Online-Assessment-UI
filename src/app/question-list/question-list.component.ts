import { Component, OnInit } from '@angular/core';
import { GeneralService } from "src/app/service/general.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questionform: FormGroup;
  questionlist: any;
  config: any;
  collection = { count: 0, data: [] };
  pageCount = 1;
  constructor(public generalService:GeneralService,private _fb: FormBuilder) { }

  ngOnInit() {
    this.questionform = new FormGroup({
      
    });
    this.generalService.get('getQuestionList').subscribe(response=>{
      console.log(response);
      this.questionlist = response;
      this.questionlist.forEach(question => {
      this.questionform.addControl(question.questionId, this._fb.control(null, Validators.required));
    })
      this.collection.data = this.questionlist;
      this.collection.count = this.questionlist.length;
    });
     this.config = {
      itemsPerPage: 1,
      currentPage: this.pageCount,
      totalItems: this.collection.count
    }
  }

  
 
  pageChanged(){
    debugger
    if(this.collection.count > this.pageCount){
    this.pageCount =  this.pageCount+1
    this.config.currentPage = this.pageCount;
    }
  }

}
