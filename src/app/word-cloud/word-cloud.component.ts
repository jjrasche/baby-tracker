import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as WordCloud from 'wordcloud';

@Component({
  selector: 'bm-word-cloud',
  templateUrl: './word-cloud.component.html',
})
export class WordCloudComponent implements AfterViewInit {
  @ViewChild('cloudElement') wordCloudElement: ElementRef;
  @Input() options: WordCloud.Options;

  ngAfterViewInit(): void {
    WordCloud(this.wordCloudElement.nativeElement, this.options);
  }
}
