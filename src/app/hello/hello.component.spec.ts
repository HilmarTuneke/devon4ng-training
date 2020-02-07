import { HelloComponent } from './hello.component';
import { HelloService } from './hello.service';

let component: HelloComponent;
let serviceFake = {
  sayOnSpeaker: (val: string) => {},
  writeToBook: (val: string) => {},
  getSpeech: () => '',
} as HelloService;
let inputElementFake = {
  nativeElement: {
    focus: () => {}
  }
};

describe('HelloComponent', () => {
  beforeEach(() => {
    component = new HelloComponent(serviceFake);
    component.vc = inputElementFake;
  });

  describe('toBook', () => {
    it('calls writeToBook if currentLine is set', () => {
      // TODO
    });

    it('does not call writeToBook if currentLine is empty', () => {
      // TODO
    });

    it('calls focus and resets currentLine', () => {
      // TODO
    });
  });

  describe('toSpeaker', () => {
    it('calls sayOnSpeaker if currentLine is set', () => {
      // TODO
    });

    it('does not call sayOnSpeaker if currentLine is not set', () => {
      // TODO
    });

    it('calls focus and resets currentLine', () => {
      // TODO
    });
  });
});
