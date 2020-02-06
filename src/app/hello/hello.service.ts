import { Injectable } from '@angular/core';

import { Speaker } from './speaker';

@Injectable()
export class HelloService {
  private lines: string[] = [];

  constructor(private speaker: Speaker) { }

  sayOnSpeaker(line: string): void {
    this.speaker.speak(line);
  }

  getSpeech(): string {
    return this.lines.join('\n');
  }

  writeToBook(line: string): void {
    this.lines.push(line);
  }

  getBook() {
    return this.lines.join('\n');
  }
}
