export interface Job {
  place: JobPlace;
  from: Date;
  to: Date | null;
  location: string;
  role: string;
  techniques: string[];
}

export enum JobPlace {
  Chessit = 'Chessit',
  SEB = 'SEB',
  SvenskaGolf = 'Svenska golfförbundet',
  Arbetsformedlingen = 'Arbetsförmedlingen',
  BrandFactory = 'BrandFactory',
  Riksarkivet = 'Riksarkivet',
  Aspia = 'Aspia',
  Interflora = 'Interflora',
  SoderbergPartners = 'Söderberg och Partners',
  ICA = 'ICA',
  Sats = 'Sats',
  Printpool = 'Printpool',
  SverigesKommunikatorer = 'Sveriges kommunikatörer',
  Forex = 'Forex',
  Ineko = 'Ineko',
  Adlibris = 'Adlibris',
}

export enum Tech {
  Angular = 'Angular',
  AngularJS = 'Angular js',
  SQL = 'SQL',
  '.NET' = '.NET',
  Scrum = 'Scrum',
  Blazor = 'Blazor',
  Vue = 'Vue',
  Vuex = 'Vuex',
  SASS = 'SASS/SCSS',
  JSON = 'JSON',
  Java = 'Java',
  CSS = 'CSS',
  Jenkins = 'Jenkins',
  Git = 'Git',
  REST = 'REST',
  TypeScript = 'TypeScript',
  WCAG = 'WCAG 2.1',
  JavaScript = 'JavaScript',
  Bootstrap = 'Bootstrap',
  EpiserverCMS = 'Episerver CMS',
  ASPNETMVC = 'ASP.NET MVC',
  RxJs = 'RxJs',
  Webpack = 'Webpack',
  Gulp = 'Gulp.js',
  Highcharts = 'Highcharts',
  HTML = 'HTML',
  jQuery = 'jQuery',
  ASPNETCore = 'ASP.NET Core',
  Grunt = 'Grunt',
  Photoshop = 'Photoshop',
  ASPNETWebforms = 'ASP.NET Webforms',
  VBNet = 'VB.NET',
  MicrosoftSQLServer = 'Microsoft SQL Server',
}
