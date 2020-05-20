import { Injectable } from "@angular/core";
import { Child } from "@models/entry";
import { activityTimelineColumns, WokeUpVsBedTime } from "../column-configs";
import { NapService } from "./nap.service";
import { ChartData } from "@models/chart-data";
import { TimelineService } from "./timeline.service";
import { DataSetService } from "./data-set.service";
import { getChildColor, getOpacity } from "@models/styel-method";
import { defaultToolTipMethod } from "@models/tool-tip-method";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { ChartColumn } from "@models/chart-column";
import { filter, map } from "rxjs/operators";
import { Datumn } from "@models/datumn";

@Injectable({providedIn: "root"})
export class ChartDataService {
  constructor(
    private napService: NapService,
    private timelineService: TimelineService,
    private dataSetService: DataSetService
  ) {}

  // createSleepStackedChart(child: Child): ChartData {
  //   return {
  //     type: "ColumnChart",
  //     title: `sleep stacked - ${child}`,
  //     columns: ["date", "sleep", "naps"],
  //     options: {
  //       isStacked: true,
  //       explorer: {
  //         actions: ["dragToPan"],
  //         axis: "horizontal",
  //       },
  //       hAxis: {
  //         viewWindow: {
  //           min: (new Date()).addDays(-30),
  //           max: new Date()
  //         },
  //       },
  //       vAxis: {
  //         title: "minutes",
  //         viewWindow: {
  //           min: 0,
  //           max: 1100
  //         },
  //       },
  //     },
  //     data$: this.napService.napTimeByChildChartData(child)
  //   };
  // }

  // createActivityTimelienChart(child: Child): ChartData {
  //   return {
  //     type: "Timeline",
  //     title: `timeline - ${child}`,
  //     columns: activityTimelineColumns,
  //     data$: this.timelineService.getTimelineByChildChartData(child)
  //   };
  // }

  /**
   * need
   *  - title
   *  - data type
   *  - data
   */
  createScatterChart(col1: BehaviorSubject<ChartColumn>, col2: BehaviorSubject<ChartColumn>): BehaviorSubject<ChartData> {
    return combineLatest([col1, col2]).pipe(
        filter(data => data[0] != null && data[1] != null),
        map((data) => {
          const ret: any[][] = [];
          const data1 = data[0].data;
          const data2 = data[1].data;
          return {
            type: "ScatterChart",
            title: ` ${col1.value.title} vs. ${col2.value.title}`,
            columns: [
              { type: col1.value.dataType },
              { type: col2.value.dataType },
              { role: "style" },
              // { role: "tooltip"}
            ],
            options: {
              explorer: { actions: ["dragToZoom", "rightClickToReset"] },
              vAxis: { title: col1.value.title },
              hAxis: { title: col2.value.title },
              trendlines: { 0: {} }
              // tooltip: {isHtml: true},
            },
            data: this.dataSetService.mergeDataSets(data1, data2, [getChildColor, getOpacity])
          } as ChartData;
        })
    ).toBehaviorSubject();
  }

  // createWokeUpBedTimeChart(): ChartData {
  //   return {
  //     type: "ScatterChart",
  //     title: `time woke up vs. time went to bed`, // *
  //     columns: [
  //       // { type: "timeofday", id: "endTime", label: "End Time" }, // *
  //       // { type: "timeofday", id: "startTime", label: "Start Time" },
  //       // { role: "style" },
  //       { type: "timeofday" }, // *
  //       { type: "timeofday"},
  //       { role: "style" },
  //       // { role: "tooltip"}
  //     ],
  //     options: {
  //       explorer: { actions: ["dragToZoom", "rightClickToReset"] },
  //       vAxis: { title: "Start Bed Time" }, // *
  //       hAxis: { title: "Sleep Wake Up Time" },
  //       trendlines: { 0: {} }
  //       // tooltip: {isHtml: true},
  //     },
  //     data$: this.dataSetService.mergeDataSets(
  //       this.dataSetService.morningWakeUptime(), // *
  //       this.dataSetService.bedTimeStart(),
  //       [getChildColor, getOpacity],
  //       )
  //   };
  // }

  // createWokeUpFirstNapStartChart(): ChartData {
  //   return {
  //     type: "ScatterChart",
  //     title: `"time woke up vs. start of first nap",`,
  //     columns: WokeUpVsBedTime,
  //     options: {
  //       explorer: {
  //         actions: ["dragToZoom", "rightClickToReset"],
  //       },
  //       vAxis: { title: "minutes" },
  //       hAxis: { title: "minutes" },
  //     },
  //     data$: this.napService.wokeUpVsFirstNapStartData()
  //   };
  // }

  // length of nap vs. time since last nap

  // trendline
  // var options = {
  //   title: 'Age vs. Weight comparison',
  //   legend: 'none',
  //   crosshair: { trigger: "both", orientation: "both" },
  //   trendlines: {
  //     0: {
  //       type: 'polynomial',
  //       degree: 3,
  //       visibleInLegend: true,
  //     }
  //   }
  // };

}
