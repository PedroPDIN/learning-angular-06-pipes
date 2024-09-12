import { IUserResponse } from './../../interfaces/user-response.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.services';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss'
})
export class ObsComObjetoComponent implements OnInit, OnDestroy {
  user: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;

  user$!: Observable<IUserResponse>
  // 👇
  // utilizando o dolar ($), para indicar que essa propriedade possui um observable.
  // "!" indica que essa propriedade estará sempre valorizada

  constructor(private readonly _userService: UsersService) { }

  ngOnInit() {
    this.user$ = this._userService.getUserById(2);


    this.userSubs = this._userService.getUserById(1).subscribe((userResponse) => {
      this.user = userResponse;
    });
  }

  ngOnDestroy() {
    // this.userSubs?.unsubscribe();

    this.userSubs && this.userSubs.unsubscribe;
  }

  onClickBtn(id: number) {
    this.user$ = this._userService.getUserById(id);
  }
}
