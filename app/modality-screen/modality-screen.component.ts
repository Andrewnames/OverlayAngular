import { Component, OnInit } from '@angular/core';
import { PatientModalityTableEntry } from '../Models/PatientModalityTableEntry';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
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
  dataSource = new MatTableDataSource(PATIENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(iconRegistry:MatIconRegistry, sanitizer:DomSanitizer) {


    iconRegistry.addSvgIcon(
'info-circle',
sanitizer.bypassSecurityTrustResourceUrl('assets/icons/info.svg'));

    console.log(PATIENT_DATA);
    for (let index = 0; index < 15; index++) {
      PATIENT_DATA.push(
        {
          IsHavingAlerts: faker.random.boolean(),
          PatientAccessionNumber: faker.random.number(1000000000),
          PatientName: faker.fake('{{name.firstName}} {{name.lastName}}'),
          PatientID: faker.random.number(9),
          PatientStudyDateTime: faker.date.past(),
          PatientStudyDescription: faker.hacker.phrase(),
          PatientBirthDate: faker.date.past(),
        }
      );
    }
  }

  ngOnInit() {
  }



}
