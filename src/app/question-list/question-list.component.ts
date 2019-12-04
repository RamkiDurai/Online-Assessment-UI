import { Component, OnInit } from '@angular/core';
import { GeneralService } from "src/app/service/general.service";
import { FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})


export class QuestionListComponent implements OnInit {
  submitedAnswer: Answer[] = [];
  testform: FormGroup;
  userForm: FormGroup;
  form: any;
  questionform: FormGroup;
  questionlist: any;
  config: any;
  collection = { count: 0, data: [] };
  pageCount = 1;

  constructor(public generalService: GeneralService, private _fb: FormBuilder,private router : Router) {
    this.config = {
      itemsPerPage: 1,
      currentPage: this.pageCount,
      totalItems: this.collection.count
    }
  }

  ngOnInit() {
    this.questionform = this._fb.group({});
    return this.generalService.get('getQuestionList').subscribe(response => {
      this.questionlist = response;
      this.questionlist.forEach(question => {
        this.questionform.addControl(question.questionId + '_answer', this._fb.control(null));
        this.collection.data = this.questionlist;
        this.collection.count = this.questionlist.length;
        this.config = {
          itemsPerPage: 1,
          currentPage: this.pageCount,
          totalItems: this.collection.count
        }
      })
    });

  }

  pagePervious() {
   
      this.pageCount = this.pageCount -1;
      this.config.currentPage = this.pageCount;
   
  }

  pageNext() {
    if (this.collection.count > this.pageCount) {
      this.pageCount = this.pageCount + 1
      this.config.currentPage = this.pageCount;
    }
  }

  onSubmitExam() {
    console.log(this.questionform.value);
    debugger
    let count = 0;
    for (let key of Object.keys(this.questionform.value)) {
      let answer = this.questionform.value[key];
      count = (answer != null && answer != undefined) ? (answer.correctAnswer ? ++count : count) : count;
    }
    // this.submitedAnswer.push(this.questionform.value)
    alert(count);
    this.router.navigate(['/examresult']);
    // debugger
    // this.questionform.value.forEach(answer =>{
    //      answer.correctAnswer ? ++count : null
    // })
    //     alert(count);
  }

}

export interface Answer {
  answer: string
  answerId: number
  correctAnswer: boolean
}
