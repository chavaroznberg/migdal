
import { Component, OnInit , Output, Input} from '@angular/core';
import { ContactsService, Person } from '../contacts-service.service';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BbComponent implements OnInit {
  @Input() contactLength:number | undefined  ; 
 // this.count;
//this.isToShow = true;
  constructor(private contactsService :ContactsService) { }
  

  resetContacts() {
    this.contactsService.resetContacts();
   this.contactLength =  this.contactsService.contactLength;
  }

  deleteContacts() {
    this.contactsService.deleteContacts();
    }

addToContacts() {
  this.contactsService.addContactPerson();
  }


  ngOnInit(){
   
  }

}

