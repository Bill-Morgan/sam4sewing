import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendMessageService } from '../send-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  emailMessage: {};

  constructor(private emailService: SendMessageService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "eventType": new FormControl(null),
      "phone": new FormControl(null),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "eventDate": new FormControl(null),
      "notes": new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log("calling send email")
    let email = this.buildEmialMessage();
    console.log("the email is: " + email.messagePlainText);
    this.emailService.login().subscribe((results) => {
      console.log("called send email");
      console.log(results);
    });
  }

  buildEmialMessage() {
    return {
      'from': 'billm@wamusa.com',
      'to': 'billm@wamusa.com',
      'subject': 'website contact request',
      'messagePlainText':
        'name: ' + this.contactForm.get('name').value + "\n" +
        'phone: ' + this.contactForm.get('phone').value + '\n' +
        'email: ' + this.contactForm.get('email').value + '\n' +
        'event date: ' + this.contactForm.get('eventDate').value + '\n' +
        'notes: ' + this.contactForm.get('notes').value
    }
  }
}
