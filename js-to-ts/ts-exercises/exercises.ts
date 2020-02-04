function createArray(first: number|string, second: number|string) {
  return [first, second];
}

function createObject(name: string, age?: number) {
  let retval: any = {
    name: name
  };
  if(age != null) {
    retval.age = age;
  }
  return retval;
}

function reverseFunc(val: number): number {
  return  parseInt(val.toString().split('').reverse().join(''));
}

function findLongestWordFunc(sentence: string): string {
  return sentence.split(' ').reduce((previousValue, currentValue) => previousValue.length > currentValue.length ? previousValue : currentValue, '');
}

function getElementsGreater(numbers: number[], threshold: number): number[] {
  return numbers.filter(value => value > threshold);
}

function parseAndBuild(json: string): {[key: string]: {count: number, allNew: boolean}} {
  var retval: {[key: string]: {count: number, allNew: boolean}} = {};

  JSON.parse(json).forEach(value => {
    if(retval[value.color]) {
      retval[value.color].count++;
      retval[value.color].allNew = retval[value.color].allNew && value.isNew;
    } else {
      retval[value.color] = {
        count: 1,
        allNew: value.isNew
      }
    }
  });
  return retval;
}
