export const napsPerDayColumns: google.visualization.GroupKeyOptions[] = [
  {label: "Date", type: "date"},
  {label: "Number of Naps", type: "number"}
] as google.visualization.GroupKeyOptions[];


export const activityTimeline: google.visualization.GroupKeyOptions[] = [
  { type: "string", id: "Day" },
  { type: "string", id: "Activity" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" }
] as google.visualization.GroupKeyOptions[];
