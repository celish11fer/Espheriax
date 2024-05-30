import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { MessageType } from '../models/content-page';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  ShowMessage(message:string, title:string, messageType:MessageType, func:() => void){
    Swal.fire({
      position: "top-end",
      icon: messageType,
      title: title,
      text: message,
      showConfirmButton: false,
      timer: 1500
    }).then(func);
  }

}
