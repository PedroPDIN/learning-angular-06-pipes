import { Pipe, PipeTransform } from "@angular/core";
import { UserStatesEnum } from "../app.component";

@Pipe({
  name: "userStates"
})
export class UserStatesPipe implements PipeTransform {
  transform(userStates: number): string {
    // if (userStates === UserStatesEnum.ATIVO) {
    //   return 'Ativo';
    // } else if (userStates === UserStatesEnum.INATIVO) {
    //   return 'Inativo';
    // } else {
    //   return 'Inválido';
    // }

    const userStatesDescription: { [key: number]: string } = {
      [UserStatesEnum.ATIVO]: 'Ativo',
      [UserStatesEnum.INATIVO]: 'Inativo'
    }

    return userStatesDescription[userStates] ? userStatesDescription[userStates] : 'Inválido';
  }
};
