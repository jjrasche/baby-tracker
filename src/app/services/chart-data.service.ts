import { Injectable } from "@angular/core";
import { Child } from "@models/entry";
import { activityTimelineColuns, WokeUpVsBedTime } from "../column-configs";
import { NapService } from "./nap.service";
import { ChartData } from "@models/chart-data";
import { TimelineService } from "./timeline.service";

@Injectable({providedIn: "root"})
export class ChartDataService {
  constructor(
    private napService: NapService,
    private timelineService: TimelineService
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
      columns: activityTimelineColuns,
      data$: this.timelineService.getTimelineByChildChartData(child)
    };
  }

  createTrendLinePlot(): ChartData {
    return {
      type: "ScatterChart",
      title: `"time woke up vs. time went to bed",`,
      columns: WokeUpVsBedTime,
      data$: this.napService.wokeUpVsBedTimeData()
    };
  }

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
