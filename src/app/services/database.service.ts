import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db: SQLiteObject | null = null; // Initialize db with null

  constructor(private platform: Platform, private sqlite: SQLite) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.db = db;
        // Initialize your database schema here
        this.createTables();
      }).catch(e => console.log(e));
    });
  }

  private createTables() {
    if (this.db) {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT, email TEXT)', [])
        .then(() => console.log('Table created'))
        .catch(e => console.log(e));
    }
  }

  public addUser(name: string, email: string) {
    if (this.db) {
      return this.db.executeSql('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    }
    return Promise.reject('Database is not initialized');
  }

  public getUsers() {
    if (this.db) {
      return this.db.executeSql('SELECT * FROM users', []).then(res => {
        let users = [];
        for (let i = 0; i < res.rows.length; i++) {
          users.push(res.rows.item(i));
        }
        return users;
      });
    }
    return Promise.reject('Database is not initialized');
  }
}
