import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import naive from 'naive-ui';

import 'fssg.core';
import { Authorizer } from 'fssg.core';
// 有效期至2095-04-23
Authorizer.set(
    'gj85vF+7ai9y/GoV7YDAvCrhO2M9CiGSRRHjF56JWqcLW40yRfhTBcyuMDyoXXTtEm0cwWVH/GG4orrOSqTl1mcTmjstk+wkpjHi9x5LHFWLvbfeEG/bJH8KLuX6HuiacBtnKBfoHvCzJjJlHTeCEGK/v3b45e6PJnF+2/VPiNI=',
    'aG/Xv/lIH4Ar1TQOfRaLDUzJ/+e4YyLS1LEDTRCphg2KBTe/kuCPlfrNeAn4dcS8hifmqFRKKc47heCiukSZOwK5ueA8JuttmGdl0/Y9acDOmtkBpXKbI0BumylXHfXwfJ3AvvZvtHZ5aQBpZ+d7d+GQ6hd6Vy+lqr74iQFkq/A='
);

createApp(App)
    .use(store)
    .use(router)
    .use(naive)
    .mount('#app');
