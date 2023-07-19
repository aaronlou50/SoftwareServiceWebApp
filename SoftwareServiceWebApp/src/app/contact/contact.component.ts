import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      inquiryTitle: ['', Validators.required],
      inquiryType: ['', Validators.required],
      budget: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    //  logging the form value to console for now, need to integrate with backend.
    console.log(this.contactForm.value);
  }
}
