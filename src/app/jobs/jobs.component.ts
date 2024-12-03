import { Component, Input } from '@angular/core';
import { Job } from '../../models/app.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  @Input() jobs: Job[] = [];
  @Input() name: string = '';

  get totalDuration(): string {
    const totalMonths = this.jobs.reduce((acc, job) => {
      const from = job.from;
      const to = job.to ? job.to : new Date(); // use current date if `to` is null
      const durationInMonths =
        (to.getFullYear() - from.getFullYear()) * 12 +
        (to.getMonth() - from.getMonth());
      return acc + durationInMonths;
    }, 0);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years} år och ${months} månader`;
  }
}
