import { Component } from '@angular/core';
import { Contact, FormContactFields, MessageType } from '../../models/content-page';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContentService } from '../../services/content.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formFields: FormContactFields | undefined;
  contactForm:FormGroup
  

  constructor(private fb:FormBuilder, private contentService:ContentService,private messageService:MessageService){

    this.contactForm = fb.group({
      fullname: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      subject : ['',[Validators.required]],
      message: ['',[Validators.required]]
    })

  }

  
  

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.contactForm.valid){
      try{
        this.contentService.addComments(this.contactForm.value as Contact);
        this.messageService.ShowMessage("Comentario enviado","Completado",MessageType.Success,() => {
          this.contactForm.reset();
        });
      }catch (error:any){
        this.messageService.ShowMessage("Hubo un error al guardar","Error",MessageType.Error,() => {});
      }
    }
    else{
      this.messageService.ShowMessage("Completa el formulario correctamente","Alerta",MessageType.Warning,() => {});
    }
  }


}
