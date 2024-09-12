import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.services';
import { IUserResponse } from '../../interfaces/user-response.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs-com-array',
  templateUrl: './obs-com-array.component.html',
  styleUrl: './obs-com-array.component.scss'
})
export class ObsComArrayComponent implements OnInit {
  users$!: Observable<IUserResponse[]>;

  constructor (private _usersService: UsersService) {}

  ngOnInit() {
    this.users$ = this._usersService.getUsers();
  }
}
