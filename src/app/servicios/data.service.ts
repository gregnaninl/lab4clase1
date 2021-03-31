import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../clases/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  contacts! :Observable<Contact>;
  private contactsCollection!: AngularFirestoreCollection<Contact>;


  constructor( private readonly afs: AngularFirestore) {
    this.contactsCollection= afs.collection<Contact>('contactos');
   }


   async onSaveContact(contactForm: Contact): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id1 = this.afs.createId();
        const data = { id1, ...contactForm };
        const result = this.contactsCollection.doc(id1).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }





}
