import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PatientModalityTableEntry } from '../Models/PatientModalityTableEntry';
import { DataServiceService } from '../DataService.service';
import { BasicProtocolPlan } from '../Models/BasicProtocolPlan';
import { ArchivedProtocol } from '../Models/ArchivedProtocol';
import * as faker from 'faker';
import { AnatomicalRegion } from '../Models/AnatomicalRegion.enum';
import { Guid } from 'guid-typescript';
import { MatRadioChange } from '@angular/material/radio';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeAnimation } from '../animations';
import { slideInDown } from 'ng-animate';
import { slideInUp } from 'ng-animate';



@Component({
  selector: 'app-select-protocol-screen',
  templateUrl: './select-protocol-screen.component.html',
  styleUrls: ['./select-protocol-screen.component.css'],
  animations: [fadeAnimation, trigger('slideInDown', [transition('* => *', useAnimation(slideInDown, {
    params: { timing: 0.1, delay: 0 }
  }))]),
    trigger('slideInUp', [transition('* => *', useAnimation(slideInUp, {
      params: { timing: 0.1, delay: 0 }
    }))]),
  ]
})

export class SelectProtocolScreenComponent implements OnInit {

  slideInDown: any;
  NumberOfTemplates: number = 0; // TODO: these gonna come from  the service
  NumberOfPriors: number = 10;
  PressureUnit: string = 'PSI';
  PressureLimits: number[] = [100,
    150,
    200,
    225,
    250,
    300];
  SelectedPatient: PatientModalityTableEntry;
  ProtocolTemplatesList: [string, BasicProtocolPlan[]][]; // tupples  array for protocol drodown
  PatientPriorsList: ArchivedProtocol[];

  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dataService: DataServiceService) {

    iconRegistry.addSvgIcon(
      'patient-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/patient.svg'));
    iconRegistry.addSvgIcon(
      'alert-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/alert.svg'));
    iconRegistry.addSvgIcon(
      'exclamationWhite-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/whiteExclamationCircle.svg'));
    iconRegistry.addSvgIcon(
      'contrast-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/contrastIcon.svg'));
    iconRegistry.addSvgIcon(
      'saline-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salineIcon.svg'));





    const navigaion = this.router.getCurrentNavigation();
    const patient = navigaion.extras.queryParams as PatientModalityTableEntry;
    console.log('caught on  selection screen');
    console.log(patient);
    this.SelectedPatient = patient;
  }

  ngOnInit() {

    this.dataService.currentMessage.subscribe(message => this.processMessage(message));


    this.PatientPriorsList = [];
    let basicPlansPerRegion = [];
    this.ProtocolTemplatesList = [];
    for (let index = 0; index < 10; index++) {

      let newPrior = new ArchivedProtocol();
      newPrior.studyName = faker.hacker.noun();
      newPrior.kvp = faker.random.number();
      newPrior.studyDate = faker.date.past(faker.random.number(4));
      newPrior.weight = faker.random.number(100);
      newPrior.studyDescription = faker.hacker.phrase();
      newPrior.id = Guid.create();
      this.PatientPriorsList.push(newPrior);

    }

    for (let region in AnatomicalRegion) {

      let newPlan = new BasicProtocolPlan();
      newPlan.name = faker.hacker.noun();
      newPlan.Id = Guid.create();
      basicPlansPerRegion.push(newPlan);
      this.NumberOfTemplates += basicPlansPerRegion.length;
      let templateTuple: [string, BasicProtocolPlan[]] = [region, basicPlansPerRegion];
      this.ProtocolTemplatesList.push(templateTuple);

    }
    console.log(this.ProtocolTemplatesList);
  }
  processMessage(message: string): void {

  }

  planSelected(planselectedChange: MatRadioChange) {
    let planGuid = planselectedChange.source.value;
    console.log('selected plan guid ' + planGuid);

  }

  randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum)
      .map(n => Number.parseInt(n))
      .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
  }

}
