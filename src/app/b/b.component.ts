
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
          // vm.isCompanyEmployer = function () {
          //     if(!vm.process || !vm.process.insured || !vm.process.insured.companyEmployer) {
          //         return '';
          //     }else{
          //         return 'עובד חברה - ' + vm.process.insured.position;
          //     }
          // };

          // vm.addInsuredToContacts = function () {
          //     $rootScope.$broadcast('add-insured-to-contacts', vm.process.insured);
          // }



    