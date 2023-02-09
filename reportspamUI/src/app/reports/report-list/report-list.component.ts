import {Component, OnInit} from '@angular/core';
import {ReportService} from "../report.service";
import {Report} from "../report.component";
import {HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit{

  constructor(private reportService: ReportService, private messageService: MessageService) {
  }

  reports : Report[] = [];
  reportsOpened: Report[] = [];

  ngOnInit(): void {
    this.getReports()
  }

  getReports() {
    this.reportService.getReports()
      .subscribe(reports => {
        this.reports = reports
        this.reportsOpened = this.reports.filter(r => r.state === 'OPEN')
        })
      }
  resolveReport(report: Report): void {
    console.log(this.reportsOpened)
    this.reportService.resolveReport(report).subscribe(report =>
      this.getReports()
    )
  }


  blockContentReport(report: Report) {
    this.messageService.add({severity:'success', detail:`Id ${report.id}`, summary: 'Blocked Report'})
    console.log(`Paylod is ${report.payload.referenceResourceId}`)
    this.reportService.blockContent(report.payload.referenceResourceId, report.payload.referenceResourceType).subscribe(
      (response) => {
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
}
