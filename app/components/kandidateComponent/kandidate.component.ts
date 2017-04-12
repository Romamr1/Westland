import { Component, OnInit} from '@angular/core';
import { VacancyService } from '../../servise/vacancy.service';
import { Vacancy } from '../../servise/vacancy.service';

@Component({
    selector: 'kandidate-app',
    templateUrl: 'app/components/kandidateComponent/kandidate.component.html',
    providers: [VacancyService]
})
export class KandidateComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService){}
  ngOnInit(){
        this.vacancies = this.vacancyService.getData();
  }
}
