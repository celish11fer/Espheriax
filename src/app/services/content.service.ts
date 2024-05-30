import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Contact, SettingApp } from '../models/content-page';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contactCollection;

  contactos: Observable<Contact[]> | undefined;

  constructor(private http:HttpClient,private firestone: Firestore) { 
    firestone = inject(Firestore);
    this.contactCollection = collection(this.firestone,'contacto');
  }

  getContentPage(){
    return this.http.get<SettingApp>("assets/contenido/data.json");
  }

  addComments(model:Contact){
    return of(addDoc(this.contactCollection,model));
  }

  getComments(){
    this.contactos = collectionData(this.contactCollection) as Observable<Contact[]>
    return this.contactos;
  }


}
