import { Injectable } from "@angular/core";
import { Child } from "@models/entry";
import { activityTimelineColumns, WokeUpVsBedTime } from "../column-configs";
import { NapService } from "./nap.service";
import { ChartData } from "@models/chart-data";
import { TimelineService } from "./timeline.service";
import { DataSetService } from "./data-set.service";
import { getChildColor, getOpacity } from "@models/styel-method";
import { defaultToolTipMethod } from "@models/tool-tip-method";

@Injectable({providedIn: "root"})
export class ChartDataService {
  constructor(
    private napService: NapService,
    private timelineService: TimelineService,
    private dataSetService: DataSetService
  ) {}

  createSleepStackedChart(child: Child): ChartData {
    return {
      type: "ColumnChart",
      title: `sleep stacked - ${child}`,
      columns: ["date", "sleep", "naps"],
      options: {
        isStacked: true,
        explorer: {
          actions: ["dragToPan"],
          axis: "horizontal",
        },
        hAxis: {
          viewWindow: {
            min: (new Date()).addDays(-30),
            max: new Date()
          },
        },
        vAxis: {
          title: "minutes",
          viewWindow: {
            min: 0,
            max: 1100
          },
        },
      },
      data$: this.napService.napTimeByChildChartData(child)
    };
  }

  createActivityTimelienChart(child: Child): ChartData {
    return {
      type: "Timeline",
      title: `timeline - ${child}`,
      columns: activityTimelineColumns,
      data$: this.timelineService.getTimelineByChildChartData(child)
    };
  }

  createWokeUpBedTimeChart(): ChartData {
    return {
      type: "ScatterChart",
      title: `"time woke up vs. time went to bed",`,
      columns: [
        { type: "timeofday", id: "endTime", label: "End Time" },
        { type: "timeofday", id: "startTime", label: "Start Time" },
        { role: "style" },
        { role: "tooltip"}
      ],
      options: {
        explorer: { actions: ["dragToZoom", "rightClickToReset"] },
        vAxis: { title: "Start Bed Time" },
        hAxis: { title: "Sleep Wake Up Time" },
        tooltip: {isHtml: true},
      },
      // data$: this.napService.wokeUpVsBedTimeData()
      data$: this.dataSetService.mergeDataSets(
        this.dataSetService.morningWakeUptime(),
        this.dataSetService.bedTimeStart(),
        [getChildColor, getOpacity],
        defaultToolTipMethod
        )
    };
  }

  createWokeUpFirstNapStartChart(): ChartData {
    return {
      type: "ScatterChart",
      title: `"time woke up vs. start of first nap",`,
      columns: WokeUpVsBedTime,
      options: {
        explorer: {
          actions: ["dragToZoom", "rightClickToReset"],
        },
        vAxis: { title: "minutes" },
        hAxis: { title: "minutes" },
      },
      data$: this.napService.wokeUpVsFirstNapStartData()
    };
  }

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
