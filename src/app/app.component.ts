import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { buttons, IButtonConf } from './LogoToAscii';
import { SerialService } from './services/serial.service';
import { CodeRunnerService } from './services/code-runner.service';
import { CodeCheckerService } from './services/code-checker.service';
import { PROGRAM } from './program';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tortueLogo';
  buttons: IButtonConf[];

  isConnected: boolean;

  constructor(private serialService: SerialService,
              private codeRunner: CodeRunnerService,
              private codeChecker: CodeCheckerService) {
    this.buttons = buttons;
    this.serialService.isConnected$.subscribe(isConnected => {
      this.isConnected = isConnected;
    })
  }

  public async checkCode(): Promise<void> {
    if (!this.codeChecker.isCodeValid(PROGRAM)) window.alert('Error');
  }

  public async sendCode(): Promise<void> {
    console.log('Checking code');
    if (!this.codeChecker.isCodeValid(PROGRAM)) return window.alert('Error');
    console.log('Code OK');
    console.log('Start sending...');
    await this.codeRunner.runCode(PROGRAM);
    console.log('Done');
  }

  public async getPorts(): Promise<void> {
    await this.serialService.getPorts();
  }
}
