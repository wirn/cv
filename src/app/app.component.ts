import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jobList } from '../models/data';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';
import { JobPlace, Tech } from '../models/app.models';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, JobsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  allJobs = jobList;
  cSSJavaScriptHTMLTypeScript = jobList.filter(
    (j) =>
      (j.techniques.includes(Tech.CSS) || j.techniques.includes(Tech.SASS)) &&
      (j.techniques.includes(Tech.TypeScript) ||
        j.techniques.includes(Tech.JavaScript))
  );

  arbAndSeb = jobList.filter(
    (j) => j.place === JobPlace.SEB || j.place === JobPlace.Arbetsformedlingen
  );

  notForexIneko = jobList.filter(
    (j) => j.place !== JobPlace.Forex && j.place !== JobPlace.Ineko
  );

  angularOrJs = jobList.filter(
    (j) =>
      j.techniques.includes(Tech.Angular) ||
      j.techniques.includes(Tech.AngularJS)
  );

  responsiveDesign = jobList.filter(
    (j) =>
      j.place !== JobPlace.Forex &&
      j.place !== JobPlace.Ineko &&
      j.place !== JobPlace.Adlibris
  );
}
