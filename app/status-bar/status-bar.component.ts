import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { DataServiceService } from '../DataService.service';
@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  IsSettingAndMaintenanceVisible = true;
  IsPwlLabelVisible = false;
  IsSelectScreen = false;


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dataService: DataServiceService) {
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
    this.dataService.currentMessage.subscribe(message => this.processMessage(message));
  }
  processMessage(message: string): void {

    switch (message) {
      case 'select screen':
        console.log('hide setting button');
        this.IsSettingAndMaintenanceVisible = false;
        this.IsPwlLabelVisible = false;
        this.IsSelectScreen = true;
        break;
      case 'modality screen':
        console.log('hide setting button and show modality worklist label');
        this.IsSettingAndMaintenanceVisible = false;
        this.IsPwlLabelVisible = true;
        break;
      default:
        break;
    }
  }
  exit() {
    window.close();
  }

}
