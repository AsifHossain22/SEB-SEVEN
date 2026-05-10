# How event loop works?

- Event loop is the heart of the Node.js!

* Node.js process:
  Start-->
  i. Expired Timer Callbacks
  ii. I/O Polling & Callbacks
  iii. Set Immediate Callbacks
  iv. Close Callbacks

  # Phase Of Event Loop
  - Event loop has 4 most important phase:
  1. Phase - 1: Handles callback functions of expired timers (eg: setTimeOut)
  2. Phase - 2: Handles callback functions of I/O polling and I/O executions (eg: Networking, File accessing). 99% or our code get executed here
  3. Phase - 3: Handles callback functions of setImmediate timer
