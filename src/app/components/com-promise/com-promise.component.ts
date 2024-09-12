import { Component, OnInit } from '@angular/core';
import { IUserResponse } from '../../interfaces/user-response.interface';
import { UsersService } from '../../services/users.services';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-com-promise',
  templateUrl: './com-promise.component.html',
  styleUrl: './com-promise.component.scss'
})
export class ComPromiseComponent implements OnInit {
  userByIdPromise: Promise<IUserResponse> | undefined;

  constructor(private readonly _userService: UsersService) { }

  ngOnInit() {
    this.userByIdPromise = lastValueFrom(this._userService.getUserById(1));
  }
}
