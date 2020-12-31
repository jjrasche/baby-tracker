import { Injectable } from "@angular/core";
import { Child } from "@models/entry";
import { activityTimelineColumns, WokeUpVsBedTime } from "../column-configs";
import { NapService } from "./nap.service";
import { ChartData } from "@models/chart-data";
import { TimelineService } from "./timeline.service";
import { DataSetService } from "./data-set.service";
import { getChildColor, getOpacity } from "@models/styel-method";
import { defaultToolTipMethod, lineChartTimeOfDayToolTip, scatterChartTimeOfDayToolTip, lineChartNumberToolTip } from "@models/tool-tip-method";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { ChartColumn } from "@models/chart-column";
import { filter, map } from "rxjs/operators";
import { Datumn } from "@models/datumn";
import { ChartType } from "@models/chart-type";

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
          const column1 = data[0];
          const column2 = data[1];
          return {
            type: "ScatterChart",
            title: ` ${column1.title} vs. ${column2.title}`,
            columns: [
              { type: column1.dataType },
              { type: column2.dataType },
              { role: "style" },
              { role: "tooltip"}
            ],
            options: {
              explorer: { actions: ["dragToZoom", "rightClickToReset"] },
              hAxis: { title: column1.title },
              vAxis: { title: column2.title },
              tooltip: {isHtml: true},
              trendlines: {
                0: {
                  type: "exponential",
                  degree: 12,
                  visibleInLegend: true,
                }
              }
            },
            data: this.dataSetService.mergeDataSets(column1.data, column2.data, [getChildColor, getOpacity], scatterChartTimeOfDayToolTip)
          } as ChartData;
        })
    ).toBehaviorSubject();
  }

  createLineChart(col: BehaviorSubject<ChartColumn>): BehaviorSubject<ChartData> {
    return col.pipe(
        filter(column => column != null),
        map((column: ChartColumn) => {
          return {
            type: "LineChart",
            title: ` ${column.title}`,
            columns: [
              { type: "datetime" },
              { type: column.dataType },
              { role: "style"},
              { role: "tooltip"},
            ],
            options: {
              explorer: { actions: ["dragToPan", "rightClickToReset"] },
              // explorer: { actions: ["dragToZoom", "rightClickToReset"] },
              hAxis: { title: column.title },
              trendlines: {
                0: {
                  type: "polynomial",
                  degree: 25,
                }
              },
              tooltip: {isHtml: true},
            },
            // data: column.data.map(d => [d.time.dateOnly(), d.data, getChildColor(d)])
            data: column.data.map(d => [d.time.dateOnly(), d.data, getChildColor(d),
              column.dataType === "timeofday" ?  lineChartTimeOfDayToolTip(d) : lineChartNumberToolTip(d)])
          } as ChartData;
        })
    ).toBehaviorSubject();
  }

  createWordCloud(title: string, options: BehaviorSubject<WordCloud.Options>): BehaviorSubject<ChartData> {
    return options.pipe(
        filter(opt => opt != null),
        map((opt: WordCloud.Options) => {
          return {
            type: ChartType.WordCloud,
            title,
            options: opt
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
