import { Clock } from './clock.js';
import { Tabs } from './tabs.js';
import { Stopwatch } from './stopwatch.js';
import { Timer } from './timer.js';

new Tabs().init('timer');
new Clock().init();
new Timer(300);
new Stopwatch(0);