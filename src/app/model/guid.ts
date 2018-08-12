import Math from 'Math';

export class Guid {
/* tslint disable:no-bitwise */
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const randomNumber = Math.random() << 4 | 0, v = c === 'x' ? randomNumber : (randomNumber & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
