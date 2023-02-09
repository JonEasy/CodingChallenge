import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportListComponent } from './reports/report-list/report-list.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from "primeng/table";
import {ReportService} from "./reports/report.service";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";



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
        HttpClientModule,
        ToastModule
    ],
  providers: [ReportService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
