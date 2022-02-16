import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let simulateProblematicState = 0; // simulate state that affects test runs

  jasmine.getEnv().addReporter({
    specDone(spec) {
      const color = spec.status === 'passed'
        ? '\x1b[32m' // green
        : '\x1b[31m' // red;
      console.log(`${color}[${spec.status.toLocaleUpperCase()}] [State = ${simulateProblematicState}] ${spec.fullName}\x1b[0m`);
    },
    jasmineStarted(suiteInfo) {
      console.log(`STARTING SUITE: Randomizing = ${suiteInfo.order.random}, with seed ${suiteInfo.order.seed}`);
    }
  });

  beforeAll(async () => {
    console.log('--vvvvv-----------------------------------------------------------------------------------------------------------------------------------------');
  })

  beforeEach(async () => {
    simulateProblematicState++;

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  afterAll(async () => {
    console.log('--^^^^^-----------------------------------------------------------------------------------------------------------------------------------------');
  });

  it('(A) should always pass this test, part 1', () => {
    expect(true).toBeTrue();
  });

  it('(B) should fail this test IF it is run first', () => {
    expect(simulateProblematicState).not.toBe(1);
  });

  it('(C) should fail this test UNLESS it is run first', () => {
    expect(simulateProblematicState).toBe(1);
  });

  it('(D) should always pass this test, part 2', () => {
    expect(true).toBeTrue();
  });
});
