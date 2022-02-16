# Sample Angular Fixate Unit Test Random Seed

A small sample of how Angular and Karma + Jasmine handle randomization.

## Using the sample

The main details are in `karma.conf.js` and in `app.component.spec.ts`.
See the latter file for full details on what it's demonstrating.

Try running `npm run test` (which "watches" for changes) and triggering a rerun of the suite a couple of times.
You should see the reporter output randomization seed, and also notice _unstable_ test results accordingly.
