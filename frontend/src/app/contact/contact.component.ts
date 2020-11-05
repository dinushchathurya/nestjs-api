import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Contact } from './../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'title', 'email', 'phone', 'address', 'city', 'actions'];
  dataSource  = [];
  contact = {};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
