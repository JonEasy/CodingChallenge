// import {TestBed} from "@angular/core/testing";
// import {ReportService} from "./report.service";
// import {HttpClient} from "@angular/common/http";
// import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
// import {Report} from "./report.component";
//
// describe("ReportService", () => {
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   let reportService: ReportService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [
//         ReportService
//       ]
//     });
//     httpClient = TestBed.inject(HttpClient);
//     httpTestingController = TestBed.inject(HttpTestingController);
//     reportService = TestBed.inject(ReportService);
//   });
//
//     afterEach(() => {
//       httpTestingController.verify();
//     });
//
//     describe("#getReports", () => {
//       let expectedReports: Report[];
//       beforeEach(() => {
//         expectedReports = [
//           {
//             id: "0103e005-b762-485f-8f7e-722019d4f302",
//             source: "REPORT",
//             sourceIdentityId: "6750b4d5-4cb5-45f0-8b60-61be2072cce2",
//             reference: {
//               referenceId: "6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429",
//               referenceType: "REPORT"
//             },
//             state: "OPEN",
//             payload: {
//               source: "REPORT",
//               reportType: "SPAM",
//               message: "",
//               reportId: "6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429",
//               referenceResourceId: "a03411ce-0197-49a2-86d4-55e06aa52e79",
//               referenceResourceType: "REPLY"
//             },
//             created: "2017-10-02T16:09:04.258Z"
//           }
//         ]
//       })
//     })
//
//
// })
