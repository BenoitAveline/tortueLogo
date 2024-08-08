import { Injectable } from '@angular/core';
import { buttons } from '../LogoToAscii';

@Injectable({
  providedIn: 'root'
})
export class CodeCheckerService {

  knownCommands: string[] = [];
  knownCommandsDictionary: {[command: string]: string} = {};

  constructor() {
    buttons.forEach(b => {
      this.knownCommands.push(b.command);
      this.knownCommandsDictionary[b.command] = b.ascii;
    });
  }

  public isCodeValid(code: string[]): boolean {
    let isValid: boolean = true;
    code.forEach(c => {
      if (!this.isCommandKnown(c)) {
        isValid = false;
        console.error(`Command '${c}' is not valid`);
      }
    });
    if (isValid) console.log('Code is valid');
    else console.log('Code is not valid');
    return isValid;
  }

  public isCommandKnown(command: string): boolean {
    return !!this.knownCommandsDictionary[command];
  }
}
