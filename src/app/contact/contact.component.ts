import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private apiService: ApiService
  ) {
    this.contactForm = this.fb.group({
      name: [''],
      message: ['']
    });
  }

  email = 'jane.doe@gmail.com';
  instagram = 'photo.world_official"';
  comments:any = [];

  ngOnInit() {
    this.apiService.getComments().subscribe((data:any) => {
      this.comments = data;
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
      
      this.apiService.addComment(
        this.contactForm.get('name')?.value,
        this.contactForm.get('message')?.value
      ).subscribe((data:any) => {
        this.comments = data;
        this.contactForm.reset();
      })
      
    } else {
      console.log('Form is invalid');
    }
  }

  onDelete(index: number) {
    console.log(this.comments);
    const id = this.comments[index]['id'];
    this.apiService.deleteComment(id).subscribe((data:any) => {
      this.comments = data;
    })
  }
}
