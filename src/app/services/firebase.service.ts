import { Injectable, inject } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Firestore, collectionData, addDoc, orderBy,collection as col, doc, updateDoc } from '@angular/fire/firestore';
import { getDocs, getFirestore, query, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  private firestore: Firestore = inject(Firestore);
  private db = getFirestore(initializeApp(environment.firebase));
  

  constructor() { }

  async getComments(){
    const q = query(collection(getFirestore(initializeApp(environment.firebase)), "comentarios"));
    const querySnapshot = await getDocs(q);
    let comentarios:any = [];
    querySnapshot.docs.forEach(doc=>{
      comentarios.push(doc.data());
    });
    return comentarios;
  }

  async getActualizacion(){
    const q = query(collection(getFirestore(initializeApp(environment.firebase)), "actualizacion"));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.size >0){
      return querySnapshot.docs[0].data();
    }else{
      return 0;
    }
  }

  async getCalificacion(){
    let comentarios = await this.getComments();
    let cal = 0;
    comentarios.forEach((data:any)=>{
      cal += data["calificacion"];
    });
    return Math.round(cal/comentarios.length);
  }

  async getDescargas(){
    const q = query(collection(getFirestore(initializeApp(environment.firebase)), "descargas"));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.size >0){
      return querySnapshot.docs[0].data()["cant"];
    }else{
      return 0;
    }
    
  }

  async addComments(comentario: any) {
    return await addDoc(col(this.firestore, "comentarios"), comentario);
  }

  async actualizarDescargas(){
    const q = query(collection(getFirestore(initializeApp(environment.firebase)), "descargas"));
    const querySnapshot = (await getDocs(q));
    
    let can = await this.getDescargas();
    await updateDoc(doc(this.firestore,"descargas",querySnapshot.docs[0].id), {cant:can+1});
    return await this.getDescargas();
  }
}
