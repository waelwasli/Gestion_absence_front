import { Component } from '@angular/core';

@Component({
  selector: 'app-popupetudiant',
  templateUrl: './popupetudiant.component.html',
  styleUrls: ['./popupetudiant.component.css']
})
export class PopupetudiantComponent {
  showPopupetd = true;
   togglePopupetd() {
   this.showPopupetd = !this.showPopupetd;
   }
}
