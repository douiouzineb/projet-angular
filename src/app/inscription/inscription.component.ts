import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { InscriptionService } from 'src/services/inscription.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.less']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;
  constructor(private fb: FormBuilder, private service: InscriptionService) { }

  ngOnInit() {
    this.inscriptionForm = this.fb.group({
      nom: [''],
      prenom: ['',[Validators.required]],
      mail: [''],
      password: ['']
    });
    console.log(this.inscriptionForm.value);
  }

  onSubmit() {
    this.service.inscription(this.inscriptionForm.value).subscribe((res) => console.log(res))
  }

}
