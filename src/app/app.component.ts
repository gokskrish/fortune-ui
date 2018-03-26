import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  scheduleItems :any;
  fortuneUrl = 'http://localhost:8080/schedule';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    this.http.get(this.fortuneUrl).
      subscribe(data => {  
        this.scheduleItems = data['schedule']
    });
  }

}
