import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

export interface TestInput {
  type: string;
  label: string;
  choices: any[];
  required: boolean;
  field: string;
}

export interface TestForm {
  maritalStatus: string | null;
  birthPlace: string | null;
}

interface Choices {
  text: string;
  value: string;
  active?: boolean;
}

export interface InputField {
  label: string;
  type: string;
  controllerName: string;
  addMoreButton?: boolean;
  labelPosition?: string | null;
  placeholder?: string | null;
  description?: string | null;
  required?: boolean;
  defaultValue?: any;
  choices?: Choices[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class TestInputService {
  private data: InputField[] = [
    {label: 'Имя', controllerName: 'name', required: true, type: 'input'},
    {label: 'Возраст', controllerName: 'age', required: true, type: 'input-number', defaultValue: 1},
    {
      label: 'Семейное положение',
      controllerName: 'status',
      type: 'input-selector',
      defaultValue: 'not-married',
      choices: [
        {text: 'Не женат / не замужем', value: 'not-married', active: true},
        {text: 'Женат / Замужем', value: 'married'}
      ]
    },
    {label: 'ВУЗ', controllerName: 'university', type: 'input', placeholder: 'Например ВолГУ'},
    {
      label: 'Место рождения',
      controllerName: 'birth-place',
      type: 'input-select',
      placeholder: 'Например ВолГУ',
      choices: [{
        text: "Не важно",
        value: 'no-matter'
      }, {
        text: "Астрахань",
        value: "Astrakhan"
      }, {
        text: "Волгоград",
        value: "Volgograd"
      }, {
        text: "Волжский",
        value: "Volzhsky"
      }, {
        text: "Ростов-на-Дону",
        value: "Rostov-on-Don"
      }, {
        text: "Саратов",
        value: "Saratov"
      }, {
        text: "Элиста",
        value: "Elista"
      }]
    },
    {
      label: 'Навыки', controllerName: 'skills', type: 'checkbox-array', choices: [
        {text: 'Общение', value: 'communication'},
        {text: 'Инностранные языки', value: 'languages'}
      ]
    },
  ]

  getFormData(): Observable<InputField[]> {
    return of(this.transformInputFields(this.data));
  }

  transformInputFields(fields: InputField[]): InputField[] {
    const defaultValues: Partial<InputField> = {
      labelPosition: null,
      placeholder: null,
      description: null,
      required: false,
      defaultValue: null,
      choices: null,
      addMoreButton: false,
    };

    return fields.map(field => ({...defaultValues, ...field}));
  }
}
