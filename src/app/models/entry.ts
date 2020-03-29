export class Entry {
  startTime: Date;
  endTime: Date;
  activity: string;
  duration: number;
  quantity: number;
  extraData: string;
  text: string;
  notes: string;
  caregiver: string;
  childName: string;

  constructor(entry: Entry) {
    this.startTime = entry.startTime;
    this.endTime = entry.endTime;
    this.activity = entry.activity;
    this.duration = entry.duration;
    this.quantity = entry.quantity;
    this.extraData = entry.extraData;
    this.text = entry.text;
    this.notes = entry.notes;
    this.caregiver = entry.caregiver;
    this.childName = entry.childName;
  }
}
