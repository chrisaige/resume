import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Page<T> {
  content: Array<T>;
  totalElements: number;
  totalPages: number;
  sort?: string;
  first: boolean;
  last: boolean;
}

export interface Job {
  type: "internship" | "temporary" | "fulltime";
  company: string;
  domain: string;
  title: string;
  duration: JobDuration;
}

export interface JobDuration {
  from: Date;
  to?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobs(page: number, pageSize: number = 5): Observable<Page<Job>> {

    const jobs: Array<Job> = [{
      type: 'internship',
      company: 'Kelag Netz',
      domain: 'https://kaerntennetz.at/',
      title: 'Technician',
      duration: { from: new Date(2011, 8, 8), to: new Date(2011, 9, 2) }
    }, {
      type: 'internship',
      company: 'Embatex Österreich AG',
      domain: 'http://www.emstar-net.com/',
      title: 'Quality Assurance',
      duration: { from: new Date(2012, 7, 9), to: new Date(2012, 8, 3) }
    }, {
      type: 'temporary',
      company: 'Ara Shoes',
      domain: 'https://www.ara-shoes.at/',
      title: 'Warehouse Worker',
      duration: { from: new Date(2013, 7, 1), to: new Date(2013, 8, 2) }
    },
    {
      type: 'temporary',
      company: 'Ara Shoes',
      domain: 'https://www.ara-shoes.at/',
      title: 'Warehouse Worker',
      duration: { from: new Date(2014, 6, 23), to: new Date(2014, 8, 8) }
    }, {
      type: 'fulltime',
      company: 'Military',
      domain: 'https://www.bundesheer.at/',
      title: 'Chauffeur',
      duration: { from: new Date(2014, 9, 1), to: new Date(2015, 2, 27) }
    }, {
      type: 'fulltime',
      company: 'Porsche Informatik GmbH',
      domain: 'https://www.porscheinformatik.com/en/',
      title: 'Software Engineer',
      duration: { from: new Date(2015, 3, 9), to: new Date() }
    }];
    return of({
      content: jobs.slice(page * pageSize, (page + 1) * pageSize),
      totalElements: jobs.length,
      totalPages: jobs.length / pageSize,
      first: page === 0,
      last: page === ((jobs.length / pageSize) - 1)
    });
  }

}
