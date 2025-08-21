import { Component } from '@angular/core';
import { jobList } from '../models/data';

import { JobsComponent } from './jobs/jobs.component';
import { JobPlace, Tech } from '../models/app.models';

@Component({
  selector: 'app-root',
  imports: [JobsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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

  typescript = jobList.filter((j) => j.techniques.includes(Tech.Angular));

  git = jobList.filter(
    (j) =>
      j.place !== JobPlace.Forex &&
      j.place !== JobPlace.Ineko &&
      j.place !== JobPlace.Adlibris
  );

  rest = jobList.filter(
    (j) => j.place !== JobPlace.Forex && j.place !== JobPlace.Ineko
  );
}
