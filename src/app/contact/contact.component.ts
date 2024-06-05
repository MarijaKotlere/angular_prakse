import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [''],
      comment: ['']
    });
  }

  email = 'jane.doe@gmail.com';
  instagram = 'photo.world_official"';
  comments = [
    {name: "User1", comment: "Great!"},
    {name: "User2", comment: "Awesome"},
    {name: "User3", comment: "Sent you request"}
  ];

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
      this.comments.push({
        name: this.contactForm.get('name')?.value,
        comment: this.contactForm.get('comment')?.value
      });
      console.log('Form Data Array:', this.comments);
      this.contactForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  onDelete(index: number) {
    this.comments.splice(index, 1);
  }
}
