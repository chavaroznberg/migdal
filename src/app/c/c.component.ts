
import { Component, OnInit } from '@angular/core';
export interface PensionFollowUpType{
  code:number;
  value:string;
}
@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})


export class CComponent implements OnInit {
  pensionFollowUpType!:PensionFollowUpType[];
  constructor() {
    this.pensionFollowUpType = [
      { code: 1, value: "במעקב נכות שנתי" },
      { code: 2, value: "במעקב נכות רפואי" },
      { code: 3, value: "במעקב נכות שנתי ורפואי" },
    ]
    var canceledClaimStatus = 2;

   }

  ngOnInit(): void {
  }
//   hasIrragularMark() {
//     return this.processModel && this.processModel.superClaim && this.processModel.superClaim.irregularSuperClaimFlag === true;
// };

// claimRemarks(){
//     var text = "";
//     if (this.processModel.superClaim && this.processModel.superClaim.inquiryPorcessFlag) {
//         text += "בירור";
//         if (this.processModel.superClaim.pensionFollowUpForInsuredType) {
//             text += ", ";
//         }
//     }
//     return text;
// };

// getClaims(){
//     if (!this.processModel.superClaim || !this.processModel.superClaim.operativeClaims) { return ''; }
//     var ParticipatingClaims = getParticipatingClaims(this.processModel.superClaim.operativeClaims)
//     return ParticipatingClaims ? ParticipatingClaims.map(function (claim) {
//         return claim.company + "-" + claim.operativeClaimNum;
//     }).join(",") : "אין תביעות משתתפות";
// };

// executeRefresh() {
//     this.refresh();
// }

// getParticipatingClaims(operativeClaims){
//     return _.filter(operativeClaims, function (claim) {
//         return claim.claimStatus.code !== canceledClaimStatus &&  testService.isParticipatingClaim(claim);
//     })
// }

// initiate(){
//     var x = 2;
// }
}

