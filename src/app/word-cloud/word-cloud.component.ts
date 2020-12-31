import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as WordCloud from 'wordcloud';

@Component({
  selector: 'bm-word-cloud',
  templateUrl: './word-cloud.component.html',
})
export class WordCloudComponent implements AfterViewInit, OnChanges {
  @ViewChild('cloudElement') wordCloudElement: ElementRef;
  @Input() options: WordCloud.Options;

  ngAfterViewInit(): void {
    WordCloud(this.wordCloudElement.nativeElement, this.options);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.options.firstChange && changes.options.previousValue.list.length != changes.options.currentValue.list.length)
    WordCloud(this.wordCloudElement.nativeElement, this.options);
  }

}
