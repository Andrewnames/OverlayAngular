import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PatientModalityTableEntry } from '../Models/PatientModalityTableEntry';
import { DataServiceService } from '../DataService.service';
import { BasicProtocolPlan } from '../Models/BasicProtocolPlan';
import { ArchivedProtocol } from '../Models/ArchivedProtocol';
import * as faker from 'faker';



@Component({
  selector: 'app-select-protocol-screen',
  templateUrl: './select-protocol-screen.component.html',
  styleUrls: ['./select-protocol-screen.component.css']
})
export class SelectProtocolScreenComponent implements OnInit {


  NumberOfTemplates: number = 10; // TODO: these gonna come from  the service
  NumberOfPriors: number = 10;
  SelectedPatient: PatientModalityTableEntry;
  ProtocolTemplatesList: BasicProtocolPlan[];
  PatientPriorsList: ArchivedProtocol[];

  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dataService: DataServiceService) {

    iconRegistry.addSvgIcon(
      'patient-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/patient.svg'));
    iconRegistry.addSvgIcon(
      'alert-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/alert.svg'));


    const navigaion = this.router.getCurrentNavigation();
    const patient = navigaion.extras.queryParams as PatientModalityTableEntry;
    console.log('caught on  selection screen');
    console.log(patient);
    this.SelectedPatient = patient;
  }

  ngOnInit() {

    this.dataService.currentMessage.subscribe(message => this.processMessage(message));

    this.ProtocolTemplatesList = [];
    this.PatientPriorsList = [];
    for (let index = 0; index < 10; index++) {


      let newPlan = new BasicProtocolPlan();
      newPlan.name = faker.hacker.noun();
      this.ProtocolTemplatesList.push(
        newPlan
      );

      let newPrior = new ArchivedProtocol();
      newPrior.studyName = faker.hacker.noun();
      newPrior.kvp = faker.random.number();
      newPrior.studyDate = faker.date.past(faker.random.number(4));
      newPrior.weight = faker.random.number(100);
      newPrior.studyDescription =faker.hacker.phrase();
      this.PatientPriorsList.push(newPrior);


    }
    console.log(this.PatientPriorsList);

  }
  processMessage(message: string): void {

  }

}
