import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { app } from 'electron';
@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'cog-wheel',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cogWheel.svg'));

    iconRegistry.addSvgIcon(
      'wrench',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/wrench.svg'));

    iconRegistry.addSvgIcon(
        'question',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/question.svg'));
  }



  ngOnInit() {
  }

  exit() {
    window.close();
  }

}
