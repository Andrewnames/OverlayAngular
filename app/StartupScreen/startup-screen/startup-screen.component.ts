import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-startup-screen',
  templateUrl: './startup-screen.component.html',
  styleUrls: ['./startup-screen.component.css']
})
export class StartupScreenComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'info-leaf',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/infoLeaf.svg'));
      }

  ngOnInit() {
  }

}
