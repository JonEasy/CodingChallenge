import {Component, OnInit} from '@angular/core';
import {ReportService} from "../report.service";
import {Report} from "../report.component";

@Component({
  selector: 'app-reports-paginator',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit{

  constructor(private reportService: ReportService) {
  }

  reports : Report[] = [];

  ngOnInit(): void {
    this.getReports()
  }

  getReports() {
    this.reportService.getReports()
      .subscribe(reports => this.reports = reports)

  }

}
