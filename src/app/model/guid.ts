declare var Math;

export class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // tslint:disable-next-line:no-bitwise
      const randomNumber = Math.random() << 4 | 0, v = c === 'x' ? randomNumber : (randomNumber & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}