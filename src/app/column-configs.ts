export const napsPerDayColumns: google.visualization.GroupKeyOptions[] = [
  {label: "Date", type: "date"},
  {label: "Number of Naps", type: "number"}
] as google.visualization.GroupKeyOptions[];


export const activityTimelineColuns: google.visualization.GroupKeyOptions[] = [
  { type: "string", id: "Day" },
  { type: "string", id: "Activity" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" }
] as google.visualization.GroupKeyOptions[];


export const WokeUpVsBedTime: google.visualization.GroupKeyOptions[] = [
  { type: "date", id: "WokeUp" },
  { type: "date", id: "BedTime" }
] as google.visualization.GroupKeyOptions[];
