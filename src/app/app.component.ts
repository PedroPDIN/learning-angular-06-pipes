import { Component, OnInit } from '@angular/core';

export enum UserStatesEnum {
  ATIVO = 1,
  INATIVO = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  user = {
    name: 'Pedro',
    age: 24,
    state: UserStatesEnum.ATIVO,
  }

  users = [
    {
      name: 'Felipe',
      status: 1,
    },
    {
      name: 'Laura',
      status: 2,
    },
    {
      name: 'João',
      status: 1,
    },
    {
      name: 'Maria',
      status: 2,
    }
  ];

  inactivateUser(userIndex: number) {
    this.users[userIndex].status = 2;
  }

  addUser() {
    this.users.push({
      name: 'Marcos',
      status: 1,
    });
  }

  getUserStatus(userStatus: number): string {
    console.log('getUserStatus');

    const status: { [key:string]: string } = {
      1: 'Ativo',
      2: 'Inativo',
    };

    return status[userStatus];
  }

  getUserImage(userStatus: number): string {
    console.log('getUserImage');

    const statusImages: { [key:number]: string } = {
      1: 'assets/icons/active-user-icon.png',
      2: 'assets/icons/inactive-user-icon.png',
    };

    return statusImages[userStatus];
  }

  minhaData: string = '2024-10-21T21:00:00.000Z';
  minhaDataObj: Date = new Date('2024-10-21T21:00:00.000Z');

  ngOnInit(): void {
    console.log('Data convertida para a região:  ', new Date(this.minhaData));
    console.log('Data UTC-0:  ', new Date(this.minhaData).toUTCString()); // ajustando para o fuso horário no Brasil.

    console.log('Timestamp', new Date(this.minhaData).getTime());
  }
}
