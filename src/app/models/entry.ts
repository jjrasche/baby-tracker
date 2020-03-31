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

  get entryDate(): Date {
    const tempDate = new Date(this.startTime);
    tempDate.setHours(0, 0, 0, 0);
    return tempDate;
  }

  get minutes(): number {
    return (this.startTime.getHours() * 60) + this.startTime.getMinutes();
  }
}
