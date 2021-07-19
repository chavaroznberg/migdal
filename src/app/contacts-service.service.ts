
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




export interface Person {
  isInsuredInHealthClaim: boolean,
  id: number,
  deliveryFlag: boolean,
  type: {
    code: number,
    value: string
  },
  firstName: string,
  lastName: string,
  identity: number,
  address: {
    homeNumber?: number,
    cityName?: string,
    streetName?: string
  },
  cellPhone: number,
  email?: string

}

export interface contactPersonType {
  INSURED: 1,
  AGENT: 2,
  EMPLOYER: 5,
  ADVOCATE: 19,
  COMMISSIONED: 20,
  OTHER: 21,
  SURVIVOR: 22
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contact!: Person[];
  contactLength!: number;
  contactPersons!: Observable<Person[]>;
  contactPerson: Person[] = [{
    isInsuredInHealthClaim: false,
    id: 1,
    deliveryFlag: true,
    type: {
      code: 1,
      value: "מבוטח"
    },
    firstName: "ניקיטה",
    lastName: "ג'יין",
    identity: 278545412,
    address: {
      homeNumber: 9,
      cityName: "רחובות",
      streetName: "אופנהיימר"
    },
    cellPhone: 525816206,
    email: "NIKITA_JAIN@AMAT.COM"
  },
  {
    isInsuredInHealthClaim: false,
    id: 2,
    deliveryFlag: false,
    type: {
      code: 21,
      value: "סוכן"
    },
    firstName: "טוביה",
    lastName: "בצקי",
    identity: 433974846,
    address: {

      cityName: "מחנה תל נוף",
    },
    cellPhone: 525452206,
  }
  ]
  constructor() {
    this.getPerson();
    this.contactLength = this.contactPerson.length;
  }

  public getPerson(): any {
    const contactPersons = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.contactPersons);
      }, 1000);
    });
    return contactPersons;
  }



  initIsInsuredInHealthClaim() {
    let element: any;
    var obj: any;
    for (obj in this.contactPersons) {
      for (element in obj) {
        element.isInsuredInHealthClaim = (element.processType === "AMBULATORY_HEALTH_CLAIM" || element.processType === "AMBULATORY_HEALTH_CLAIM_CONT") && element.contactPersons.type.code === element.contactPersonType.INSURED;
      }
    }
  }


  //contacts function

  resetContacts() {
    var emptyContacts = [];
    emptyContacts.push(this.contactPerson[0]);
    this.contactPerson = emptyContacts;
    this.contactLength = this.contactPerson.length;
  }

  addContactPerson() {
    this.contactPerson.push({
      isInsuredInHealthClaim: false,
      id: this.contactLength,
      deliveryFlag: this.contactPerson[this.contactLength - 1] ? this.contactPerson[this.contactLength - 1].deliveryFlag ? false : true : true,
      type: {
        code: 5,
        value: "שאר"
      },
      firstName: "ישראל",
      lastName: "ישראלי",
      identity: 278545412,
      address: {
        homeNumber: 9,
        cityName: "רחובות",
        streetName: "אופנהיימר"
      },
      cellPhone: 525816206,
      email: "NIKITA_JAIN@AMAT.COM"
    })
    this.contactLength++;
  }


  deleteContacts() {
    var deleteContact: [] = [];
    this.contactPerson = deleteContact;
    this.contactLength = this.contactPerson.length;
  }

  // public addInsuredToContacts = function(event, params){
  //   var newContact = createContact(params);
  //   this.contactPersons.push(newContact);
  //   $rootScope.$emit('update-contacts-count', vm.contactPersons.length);
  // }

  // createContact(contact:Person) {
  //   return {
  //      isInsuredInHealthClaim: false,
  //       id: this.contactPersons.length,
  //       deliveryFlag : this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
  //       type : {
  //           code : 1,
  //           value : "מבוטח"
  //       },
  //       firstName : contact.firstName,
  //       lastName : contact.lastName,
  //       identity :  contact.identity,
  //       address : {
  //           cityName : contact.address.cityName,
  //           streetName :  contact.address.streetName
  //       },
  //       cellPhone : contact.cellPhone,
  //       email : contact.email
  //   }
  // }



}
