import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from "src/app/question-list/question-list.component";
import { ExamResultComponent } from "src/app/exam-result/exam-result.component";


const routes: Routes = [
  {path:'',redirectTo:'/questions',pathMatch:'full'},
  {path:'questions', component:QuestionListComponent},
  {path:'examresult', component:ExamResultComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
