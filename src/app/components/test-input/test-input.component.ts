import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TestInputService, TestInput, TestForm, InputField} from './test-input.service';
import {MatSelectModule} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  standalone: true,
  imports: [
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    MatButtonToggleModule,
    MatIconModule
  ],
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit, OnDestroy {
  formData: InputField[] = [];
  form: FormGroup;
  testInputs: TestInput[] = [];

  private destroy = new Subject();

  constructor(private fb: FormBuilder, private testInputService: TestInputService) {
    this.form = this.fb.group({});
  }

  private initForm(): void {
    this.formData.forEach(field => {
      this.form.addControl(field.controllerName, this.fb.control(field.defaultValue, field.required ? [Validators.required] : []));
    });
  }

  ngOnInit(): void {
    this.testInputService.getFormData().pipe(takeUntil(this.destroy)).subscribe({
      next: formData => {
        this.formData = formData;
        this.initForm();
      },
      error: err => {
        throw new Error('Что-то пошло не так', err)
      }
    });

    this.testInputs.forEach(input => {
      const defaultValue = input.choices ? input.choices[0] : null;
      const validators = input.required ? [Validators.required] : [];
      this.form.addControl(input.field, this.fb.control(defaultValue, validators));
    });
  }

  ngOnDestroy() {
    this.destroy.complete();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const testForm: TestForm = this.form.value;
      console.log('Submitted form:', testForm);
    } else {
      console.log('Форма невалидна');
    }
  }
}
