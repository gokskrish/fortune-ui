import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fortuneUrl = 'http://localhost:8080/schedule';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("HELLO GOKS");

    this.http.get(this.fortuneUrl).
      subscribe(data => {  
        this.title = data['content']
    });
  
  }

}
