import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-contact',
  templateUrl: './navbar-contact.component.html',
  styleUrls: ['./navbar-contact.component.css']
})
export class NavbarContactComponent implements OnInit {

  model: any = {};

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  
  onSubmit(name, subject, email, message) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mwkwpzve',
      { name: name, subject: subject, replyto: email, message: message },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }

}
