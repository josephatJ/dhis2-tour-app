import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/reducers";
import { Observable } from "rxjs";
import { User } from "src/app/core";
import { getCurrentUser, getSystemUsers } from "src/app/store/selectors";
import { getTourConfigsState } from "src/app/store/selectors/tour-configs.selectors";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  contentsSummary: Array<any> = [
    {
      id: "dashboard",
      name: "Dashboard",
      url: "../../../dhis-web-dashboard/index.action",
      textSummary: "View data from saved reports",
      description:
        "The dashboard module helps you to view the summary of the reports (tables, charts e.t.c) created via analysis tools, resources, standard reports e.t.c. You can customize the dashboard reports the way you want."
    },
    {
      id: "standard-reports",
      name: "Standard reports",
      url: "../../../dhis-web-reporting/displayViewReportForm.action",
      textSummary: "View custom reports",
      description:
        "There are customized reports to meet your needs. These reports draw data from the entry forms and shows them according to the template of the design."
    },
    {
      id: "data-entry",
      name: "Data entry",
      url: "../../../dhis-web-dataentry/index.action",
      textSummary: "Enter data through forms",
      description:
        "The dashboard module helps you to view the summary of the reports (tables, charts e.t.c) created via analysis tools, resources, standard reports e.t.c. You can customize the dashboard reports the way you want."
    },
    {
      id: "pivot-table",
      name: "Pivot table",
      url: "../../../dhis-web-pivot/index.html",
      textSummary: "Generate reports in tables",
      description:
        "Pivot table, as name suggests, it is analysis tool where one can present the data into a table. One can dedicate what should be into rows and what should be into columns"
    },
    {
      id: "data-visualizer",
      name: "Data visualizer",
      url: "../../../dhis-web-data-visualizer/index.html",
      textSummary: "generate reports in graphs/charts",
      description:
        "Data visualizer is also an analysis tool used to create reports into charts. It supports different types of charts where one can choose the best chart for the data to be analysed"
    },
    {
      id: "dictionary",
      name: "Indicator dictionary",
      url: "../../../api/apps/SSB-Indicator-Dictionary/index.html#/",
      textSummary: "View defintions of indicators",
      description:
        "The indicator dictionary (SSB Dictionary) helps one to view the definition of different metadata of in the system. With seeing the definition, one will be confortable to view the data"
    }
  ];
  isViewAllContentsSet: boolean = false;
  searchInput: string;
  isChatSet: boolean = false;
  selectedUsername: string = "";
  currentUserUsername: string;
  currentUser$: Observable<User>;
  users$: Observable<any>;
  configsData$: Observable<any>;
  configsData: any;
  constructor(private store: Store<State>) {
    this.searchInput = "";
    this.currentUser$ = this.store.select(getCurrentUser);
    this.users$ = this.store.select(getSystemUsers);
    this.configsData$ = this.store.select(getTourConfigsState);
    this.configsData$.subscribe(data => {
      if (data && data.contentsSummary) {
        console.log(data);
        this.configsData = data;
      }
    });
  }

  ngOnInit() {}

  sliceContents(arr, start, end, viewAll) {
    if (!viewAll) {
      return _.slice(arr, start, end);
    } else {
      return arr;
    }
  }

  setViewAll() {
    this.isViewAllContentsSet = !this.isViewAllContentsSet;
  }

  showChat() {
    this.isChatSet = !this.isChatSet;
  }
}
