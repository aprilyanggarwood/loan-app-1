/*
 Title: contact.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/15/2022
 Description: Assignment 9.2 - Capstone (Delivery)
Resources: Material Design https://material.io
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

   contactUs: string;

  constructor() {
    this.contactUs = "Contact Us"

  }

  ngOnInit(): void {
  }

}
