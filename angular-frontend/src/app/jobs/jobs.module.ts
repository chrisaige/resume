import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { JobsRoutingModule } from './jobs-routing.module';
import { OverviewComponent } from './overview/overview.component';



@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class JobsModule { }
