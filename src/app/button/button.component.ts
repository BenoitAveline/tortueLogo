import { Component, Input, OnInit } from '@angular/core';
import { IButtonConf } from '../LogoToAscii';
import { SerialService } from '../services/serial.service';
import { CodeRunnerService } from '../services/code-runner.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit  {

  @Input() conf: IButtonConf = {
    "command": "...",
    "ascii": "",
    "position": {
      "x": 0,
      "y": 0
    },
    "size": {
      "h": 0,
      "w": 0
    },
    "color": "",
    "tooltip": ""
  };
  asciiCodeDec: number = 0;
  asciiCodeBin: string = '';
  asciiCodeBinDisplay: string = '';

  constructor(private runner: CodeRunnerService) {

  }

  public ngOnInit(): void {
    this.asciiCodeDec = this.conf.ascii.charCodeAt(0);
    this.asciiCodeBin = this.toBin(this.asciiCodeDec);
    this.asciiCodeBinDisplay = this.asciiCodeBin.replace(/0/g, '⚬').replace(/1/g, '●')
  }

  public async onClick(): Promise<void> {
    await this.runner.runCode([this.conf.command]);
  }

  private toBin(code: number): string {
    let bin: string = code.toString(2);
    while (bin.length < 7) bin = '0' + bin;
    return bin;
  }

}
