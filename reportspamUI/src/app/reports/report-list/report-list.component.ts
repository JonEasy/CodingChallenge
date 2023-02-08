import {Component, OnInit} from '@angular/core';
import {ReportService} from "../report.service";
import {Report} from "../report.component";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-report-list',
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
      .subscribe(reports => {
        console.log(reports)
        this.reports = reports
        console.log(this.reports)
      })
  }

  resolveReport(report: Report): void {
    report.state = "CLOSED"
    this.reportService.resolveReport(report).subscribe( report => {
        console.log(report);
        this.getReports();
      },
      (error: HttpErrorResponse) => {
        alert(error)
      }
    )}

}
