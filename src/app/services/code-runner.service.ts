import { Injectable } from '@angular/core';
import { SerialService } from './serial.service';
import { buttons } from '../LogoToAscii';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeRunnerService {

  knownCommandsDictionary: {[command: string]: string} = {};
  isConnected: boolean;

  constructor(private serialService: SerialService) {
    this.serialService.isConnected$.subscribe(isConnected => {
      this.isConnected = isConnected;
    });
    buttons.forEach(b => {
      this.knownCommandsDictionary[b.command] = b.ascii;
    });
  }

  public async runCode(code: string[]): Promise<void> {
    for (let i = 0; i< code.length; i++) {
      await this.runCommand(code[i]);
    }
  }

  private async runCommand(command: string): Promise<void> {
    if (!this.isConnected) return;
    return new Promise<void>(async resolve => {
      console.log(command);
      console.log(this.knownCommandsDictionary[command]);
      let asciiCodeDec: number = this.knownCommandsDictionary[command].charCodeAt(0);
      await this.serialService.send(asciiCodeDec);
      setTimeout(() => resolve(), 5000);
    });
  }
}
