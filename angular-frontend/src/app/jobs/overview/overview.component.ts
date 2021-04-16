import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Job, JobsService, Page } from '../jobs.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];

  readonly jobs: Observable<Page<Job>>;

  constructor(private jobService: JobsService) {
    this.jobs = this.jobService.getJobs(0).pipe(shareReplay(1))
  }

  ngOnInit(): void {

  }
}

