import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportListComponent } from './reports/report-list/report-list.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from "primeng/table";
import {ReportService} from "./reports/report.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        TableModule,
        HttpClientModule

    ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
