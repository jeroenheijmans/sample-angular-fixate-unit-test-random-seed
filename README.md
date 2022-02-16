# Sample Angular Fixate Unit Test Random Seed

A small sample of how Angular and Karma + Jasmine handle randomization.

> ⚠ Warning: This sample repository does not receive regular (security) updates.

## Using the sample

The main details are in `karma.conf.js` and in `app.component.spec.ts`.
See the latter file for full details on what it's demonstrating.

Try running `npm run test` (which "watches" for changes) and triggering a rerun of the suite a couple of times.
You should see the reporter output randomization seed, and also notice _unstable_ test results accordingly.

You can also try setting `random: false` or `seed: 1234` in `karma.confi.js` (the `jasmine: {...}` section).
