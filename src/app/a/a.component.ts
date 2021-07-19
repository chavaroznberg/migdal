import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsService, Person } from '../contacts-service.service';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  contact: Person[] = [];
  contactPersons:any;
  @Output() contactLength = new EventEmitter();
  isInsuredInHealthClaim: boolean = false;
  constructor(private contactsService:ContactsService) {
    
   }
  
  ngOnInit() {
  this.contactsService.initIsInsuredInHealthClaim();
  debugger
  this.contactPersons = this.contactsService.contactPerson;
//   this.contactPersons.subscribe((PersonData: Person[]) => {
//     this.contact = PersonData;
// });
  }
  addContactPerson(){

    this.contactsService.addContactPerson();
  }

}
