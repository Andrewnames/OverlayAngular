import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PatientModalityTableEntry } from '../Models/PatientModalityTableEntry';
import { DataServiceService } from '../DataService.service';
import { BasicProtocolPlan } from '../Models/BasicProtocolPlan';
import { ArchivedProtocol } from '../Models/ArchivedProtocol';

let SelectedPatient: PatientModalityTableEntry;
let ProtocolTemplatesList: BasicProtocolPlan[];
let PatientPriorsList: ArchivedProtocol[];

@Component({
  selector: 'app-select-protocol-screen',
  templateUrl: './select-protocol-screen.component.html',
  styleUrls: ['./select-protocol-screen.component.css']
})
export class SelectProtocolScreenComponent implements OnInit {


  NumberOfTemplates: 10; // TODO: these gonna come from  the service
  NumberOfPriors: 10;

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
    SelectedPatient = patient;
  }

  ngOnInit() {

    this.dataService.currentMessage.subscribe(message => this.processMessage(message));
    // this.PatientPriorsList = new ArchivedProtocol();
    // for (let index = 0; index < 10; index++) {
    //   PatientPriorsList

    // }

  }
  processMessage(message: string): void {

  }

}
