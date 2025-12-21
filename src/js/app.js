// Import jQuery first
import $ from 'jquery';
window.$ = window.jQuery = $;

// Import Popper and make it globally available for Bootstrap
import Popper from 'popper.js';
window.Popper = Popper;

// Import Bootstrap
import 'bootstrap';

// Import CSS files
import '../css/aos.css';
import '../css/bootstrap.min.css';
import '../css/main.css';

// Import UI kit and animations
import './now-ui-kit.js';
import AOS from './aos.js';
window.AOS = AOS;

// Import plugins
import './plugins/bootstrap-switch.js';
import './plugins/bootstrap-datepicker.js';
import './plugins/nouislider.min.js';
import './plugins/jquery.sharrre.js';

// Import custom scripts
import '../scripts/main.js';
import '../scripts/index.js';
