import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PatientModalityTableEntry } from '../Models/PatientModalityTableEntry';


@Component({
  selector: 'app-select-protocol-screen',
  templateUrl: './select-protocol-screen.component.html',
  styleUrls: ['./select-protocol-screen.component.css']
})
export class SelectProtocolScreenComponent implements OnInit {
  SelectedPatient: PatientModalityTableEntry;

  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'patient-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/patient.svg'));


    const navigaion = this.router.getCurrentNavigation();
    const patient = navigaion.extras.queryParams as PatientModalityTableEntry;
    console.log('caught on  selection screen');
    console.log(patient);
    this.SelectedPatient = patient;
  }

  ngOnInit() {


  }

}
