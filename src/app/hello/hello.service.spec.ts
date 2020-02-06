import { Speaker } from './speaker';
import { HelloService } from './hello.service';

let speakerSpy: Speaker;
let sut: HelloService;
describe('HelloService', () => {
  beforeEach(() => {
    speakerSpy = jasmine.createSpyObj('speaker', ['speak']);
    sut = new HelloService(speakerSpy);
  });

  describe('sayOnSpeaker', () => {
    it('should call Speaker once', () => {
      // Given
      const speechLine = 'This is Sparta!';

      // When
      sut.sayOnSpeaker(speechLine);

      // Then
      expect(speakerSpy.speak).toHaveBeenCalledWith(speechLine);
    });

    it('should not be added to speech', () => {
      // Given
      const speechLine = 'This is Sparta!';
      sut.sayOnSpeaker(speechLine);

      // When
      const speech = sut.getSpeech();

      // Then
      expect(speech).toBe('');
    });

    it('should call Speaker several times', () => {
      // Given
      const speechLine = 'This is Sparta!';

      // When
      sut.sayOnSpeaker(speechLine);
      sut.sayOnSpeaker(speechLine);
      sut.sayOnSpeaker(speechLine);

      // Then
      expect(speakerSpy.speak).toHaveBeenCalledTimes(3);
    });
  });

  describe('speech', () => {
    it('should be empty initially', () => {
      // Given

      // When
      const actual = sut.getSpeech();

      // Then
      expect(actual).toBe('');
    });

    it('should contain one saying', () => {
      // Given
      const line = 'First Line';
      sut.writeToBook(line);

      // When
      const actual = sut.getSpeech();

      // Then
      expect(actual).toBe(line);
    });

    it('should not add to book', () => {
      // Given
      const line = 'First Line';
      sut.sayOnSpeaker(line);

      // When
      const actual = sut.getBook();

      // Then
      expect(actual).toBe('');
    });

    it('should contain two lines', () => {
      // Given
      const lines = ['First Line', '2nd Line'];
      lines.forEach(line => sut.writeToBook(line));

      // When
      const actual = sut.getSpeech();

      // Then
      expect(actual).toBe(lines.join('\n'));
    });
  });


  describe('writeToBook', () => {
    it('should add to speech', () => {
      // Given
      const line = 'One Line';
      sut.writeToBook(line);

      // When
      const actual = sut.getSpeech();

      // Then
      expect(actual).toBe(line);
    });

    it('should add to book', () => {
      // Given
      const line = 'One Line';
      sut.writeToBook(line);

      // When
      const actual = sut.getBook();

      // Then
      expect(actual).toBe(line);
    });

  });
});
