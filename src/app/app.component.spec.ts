import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let simulateProblematicState = 0; // simulate state that affects test runs

  jasmine.getEnv().addReporter({
    specDone(spec) {
      console.log(`[${spec.status.toLocaleUpperCase()}] [State = ${simulateProblematicState}] ${spec.fullName}`);
    },
  });

  beforeAll(async () => {
    console.log();
    console.log();
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
    console.log();
    console.log();
  });

  it('(A) should always fail this test', () => {
    expect(true).toBeFalse();
  });

  it('(B) should always pass this test', () => {
    expect(true).toBeTrue();
  });

  it('(C) should fail this test IF it is run first', () => {
    expect(simulateProblematicState).not.toBe(1);
  });

  it('(D) should fail this test UNLESS it is run first', () => {
    expect(simulateProblematicState).toBe(1);
  });
});
