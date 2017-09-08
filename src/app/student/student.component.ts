import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {StudentDto} from "../../shared/dto/studentDto";
import {StudentData} from "../../shared/student-data";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;
  private studentList: Array<StudentDto> = [];
  private studentObj: StudentDto = {};
  private departmentList: Array<string> = ["Computer Science", "Information Science", "Electronics", "Mechanical", "Civil"];
  private studentAdd: boolean = true;
  private studentUpdate: boolean = false;
  private disableRollNum: boolean = false;
  private formSubmitted: boolean = false;
  private showSuccessMessage: boolean = false;


  constructor() { }

  ngOnInit() {
    //Get the mock data from other file
    this.studentList = StudentData;
  }

  /*
  * Method to add a Student
  * */
  private addStudent(addStudentObj: StudentDto, formValid: boolean): void {
    this.formSubmitted = true;
    if(formValid){
      this.studentList.push(addStudentObj);
      this.closeModal.nativeElement.click();
      this.studentObj = {};
      this.showSuccessMessage = true;
    }
  }

  /*
  * Get a Student from table and provide it ot the model for edition
  * */
  private editStudent(editStudentObj: StudentDto): void {
    this.studentAdd = false;
    this.studentUpdate = true;
    this.disableRollNum = true;
    this.studentObj = Object.assign({}, editStudentObj);
  }

  /*
  * Edit the student in modal and update the student object in array
  * */
  private updateStudent(updateStudentObj: StudentDto, formValid: boolean): void {
    this.formSubmitted = true;
    if(formValid){
      for(let i:number = 0; i<this.studentList.length; i++){
        if(this.studentList[i].rollNumber == updateStudentObj.rollNumber){
          this.studentList[i] = updateStudentObj;
        }
      }
      this.studentObj = {};
      this.disableRollNum = false;
      this.closeModal.nativeElement.click();
    }

  }

  private deleteStudent(deleteStudentObj: StudentDto): void {
    for(let i:number = 0; i<this.studentList.length; i++){
      if(this.studentList[i].rollNumber == deleteStudentObj.rollNumber){
        this.studentList.splice(i, 1);
      }
    }
  }

}
