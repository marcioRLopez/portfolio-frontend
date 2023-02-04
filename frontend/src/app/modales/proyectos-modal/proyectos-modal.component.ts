import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import Validation from 'src/app/utils/validation';

@Component({
  selector: 'app-proyectos-modal',
  templateUrl: './proyectos-modal.component.html',
  styleUrls: ['./proyectos-modal.component.css']
})
export class ProyectosModalComponent implements OnInit {
  form: FormGroup = new FormGroup({ 
    proyectos: new FormControl(''),
    
  });
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        // fullname: ['', Validators.required],
        proyectos: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
          ],
        ],
      },
      {
        //revisar esta parte para cambiarlo o no
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }




}
