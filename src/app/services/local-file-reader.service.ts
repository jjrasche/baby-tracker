import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LocalFileReader {

  constructor(private httpClient: HttpClient) { }

  readFile(filePath: string): Observable<string> {
    return this.httpClient.get(filePath,  {responseType: "text"}).pipe(
      map(response => {
        return response as string;
      })
    );
  }


}
