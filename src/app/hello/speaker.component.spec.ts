import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {Speaker} from './speaker';
import {SpeakerComponent} from './speaker.component';
import {DebugElement} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import {empty} from 'rxjs/observable/empty';

let fixture: ComponentFixture<SpeakerComponent>;
let speaker: Speaker;

describe('SpeakerComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakerComponent],
      providers: [Speaker]
    });

    fixture = TestBed.createComponent(SpeakerComponent);
    speaker = fixture.debugElement.injector.get(Speaker);
  });

  it('displays default value', () => {
    spyOn(speaker, 'getLine').and.returnValue(Observable.empty());
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();

    const defaultValue = 'speaker is quiet';
    const span: DebugElement = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.innerText).toBe(defaultValue);
  });

  it('displays emitted line', () => {
    const newLine = 'line1';
    spyOn(speaker, 'getLine').and.returnValue(of(newLine));
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();

    const span: DebugElement = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.innerText).toBe(newLine);
  });
});
