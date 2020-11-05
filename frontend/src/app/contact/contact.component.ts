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
    this.apiService.readContacts().subscribe((result) => {
    this.dataSource  =  result;
    });
  }

  selectContact(contact) {
    this.contact = contact;
  }

  newContact() {
    this.contact = {};
  }

  createContact(f) {
    this.apiService.createContact(f.value).subscribe((result) => {
      console.log(result);
    });

  }

  deleteContact(id) {
    this.apiService.deleteContact(id).subscribe((result) => {
      console.log(result);
    });
  }

  updateContact(f) {
    // tslint:disable-next-line:no-string-literal
    f.value.id = this.contact['id'];
    this.apiService.updateContact(f.value).subscribe((result) => {
      console.log(result);
    });
  }

}
