import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminOptionsService {

    constructor(private db: AngularFirestore) { }

	public getAll() {
		return this.db.collection('admin-options').valueChanges();
	}
}
