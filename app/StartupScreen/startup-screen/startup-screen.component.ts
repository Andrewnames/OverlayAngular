import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startup-screen',
  templateUrl: './startup-screen.component.html',
  styleUrls: ['./startup-screen.component.css']
})
export class StartupScreenComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private router: Router) {
    iconRegistry.addSvgIcon(
      'info-leaf',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/infoLeaf.svg'));

  }

  ngOnInit() {
  }

  navigateToPwl() {
    this.router.navigate(['modality-worklist']);
    console.log('navigate to pwl');
  }

}
