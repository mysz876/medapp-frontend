import { Component } from '@angular/core';
import { IRoute } from './modules/shared/models/route.interface';
import { specializationURLs } from './modules/specialization/configs/url';
import { branchURLs } from './modules/branch/configs/url';
import { doctorURLs } from './modules/doctor/configs/url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medapp';

  routes: IRoute[] = [
    { name: 'Dodaj specjalizacje', route: specializationURLs.create },
    { name: 'Lista specjalizacji', route: specializationURLs.list },
    { name: 'Dodaj oddział', route: branchURLs.create },
    { name: 'Lista oddziałów', route: branchURLs.list },
    { name: 'Dodaj lekarza', route: doctorURLs.create },
    { name: 'Lista lekarzy', route: doctorURLs.list },
  ]
}
