import signals from 'signals';

import Breakpoints from './../constants/breakpoints';


class BreakpointModel {
  constructor() {
    this.breakpoint = null;

    // signals
    this.changed = new signals.Signal();

    // add event listeners
    window.addEventListener(
      'resize',
      this.onWindowResized.bind(this)
    );

    // set initial value
    this.detectBreakpoint();
  }

  detectBreakpoint() {
    // check current width of screen
    let w = window.innerWidth;
    let newBreakpoint = null;
    if (w >= Breakpoints.PHONE && w < Breakpoints.TABLET) {
      newBreakpoint = Breakpoints.PHONE;

    } else if (w >= Breakpoints.TABLET && w < Breakpoints.DESKTOP) {
      newBreakpoint = Breakpoints.TABLET;

    } else if (w >= Breakpoints.DESKTOP && w < Breakpoints.LARGE_DESKTOP) {
      newBreakpoint = Breakpoints.DESKTOP;

    } else if (w >= Breakpoints.LARGE_DESKTOP) {
      newBreakpoint = Breakpoints.LARGE_DESKTOP;
    }

    // dispatch event if breakpoint is new
    if (newBreakpoint !== this.breakpoint) {
      this.breakpoint = newBreakpoint;
      this.changed.dispatch();
    }
  }

  onWindowResized() {
    this.detectBreakpoint();
  }
}


// create and export singleton
let breakpointModel = new BreakpointModel();
export default breakpointModel;