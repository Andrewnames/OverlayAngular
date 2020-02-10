import { Component, OnInit } from '@angular/core';
import { PatientModalityTableEntry } from '../Models/PatientModalityTableEntry';
import * as faker from 'faker';


const PATIENT_DATA: PatientModalityTableEntry[] = [
  {
    IsHavingAlerts: false,
    PatientAccessionNumber: faker.random.number(9),
    PatientName: faker.fake('{{name.firstName}} {{name.lastName}}'),
    PatientID: faker.random.number(9),
    PatientStudyDateTime: faker.date.past(),
    PatientStudyDescription: faker.hacker.phrase(),
    PatientBirthDate: faker.date.past(),
  }
];
@Component({
  selector: 'app-modality-screen',
  templateUrl: './modality-screen.component.html',
  styleUrls: ['./modality-screen.component.css']
})


export class ModalityScreenComponent implements OnInit {
  displayedColumns: string[] = ['alert', 'patient-name', 'birth-date', 'id', 'studyDT', 'accessionNumber', 'studyDescr'];
  dataSource = PATIENT_DATA;
  constructor() {

    console.log(PATIENT_DATA);
   }

  ngOnInit() {
  }

}
