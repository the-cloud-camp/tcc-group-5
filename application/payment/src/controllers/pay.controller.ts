// Uncomment these imports to begin using these cool features!

import { get } from '@loopback/rest';

export class PayController {
  // constructor() { }
  @get('/pay')
  pay(): string {
    return 'Hello world!';
  }

}
