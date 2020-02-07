import {ComponentFixture, fakeAsync, flushMicrotasks, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {Book} from './book';
import {BookComponent} from './book.component';
import {of} from 'rxjs/observable/of';

let fixture: ComponentFixture<BookComponent>;
let book: Book;

describe('BookComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [Book]
    });

    fixture = TestBed.createComponent(BookComponent);
    book = fixture.debugElement.injector.get(Book);
  });

  it('displays no li elements if no line written', () => {
    const liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements.length).toBe(0);
  });

  it('displays a li with matching content if 1 line written', fakeAsync(() => {
    const line = 'first Line';
    book.lines$ = of([line]);
    fixture.detectChanges();
    flushMicrotasks();
    const liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements.length).toBe(1);
    expect(liElements[0].nativeElement.innerText).toBe(line);
  }));

  it('displays five li if five lines written to book', fakeAsync(() => {
    const line = 'first Line';
    book.lines$ = of([line, line, line, line, line]);
    fixture.detectChanges();
    flushMicrotasks();
    const liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements.length).toBe(5);
  }));
});
