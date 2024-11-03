import {Component} from '@angular/core';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  standalone: true,
  imports: [
    MatSelectModule,
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent {
  maritalStatusOptions: string[] = ['Не женат / не замужем', 'Женат / замужем'];
  birthPlaceOptions: string[] = [
    'Не важно',
    'Астрахань',
    'Волгоград',
    'Волжский',
    'Ростов-на-Дону',
    'Саратов',
    'Элиста'
  ];

  selectedMaritalStatus: string | null = null;
  selectedBirthPlace: string | null = null;
}
