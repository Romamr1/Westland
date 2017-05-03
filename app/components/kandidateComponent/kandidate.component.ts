import { Component, OnInit, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { VacancyService } from '../../servise/vacancy.service';
import { Vacancy } from '../../servise/vacancy.service';

// import { Modal } from 'angular2-modal/plugins/bootstrap';
// import { AdditionCalculateWindow, AdditionCalculateWindowData } from './popup-upload-cv/upload-cv';

@Component({
    selector: 'kandidate-app',
    templateUrl: 'app/components/kandidateComponent/kandidate.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [VacancyService]
})
export class KandidateComponent implements OnInit {
  vacancies: Vacancy[] = [];
  
  constructor(private vacancyService: VacancyService){}


  // onClick() {
  //   this.modal.alert()
  //       .size('lg')
  //       .showClose(true)
  //       .title('A simple Alert style modal window')
  //       .body(`
  //           <h4>Alert is a classic (title/body/footer) 1 button modal window that 
  //           does not block.</h4>
  //           <b>Configuration:</b>
  //           <ul>
  //               <li>Non blocking (click anywhere outside to dismiss)</li>
  //               <li>Size large</li>
  //               <li>Dismissed with default keyboard key (ESC)</li>
  //               <li>Close wth button click</li>
  //               <li>HTML content</li>
  //           </ul>`)
  //       .open();
  // }
  
  // openCustom() {
  //   this.modal.open(AdditionCalculateWindow, new AdditionCalculateWindowData(2, 3));
  // }


  ngOnInit(){
        this.vacancies = this.vacancyService.getData();
  }
}
