import { createApp } from 'vue'
import App from './App.vue'
import 'primeflex/primeflex.css';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import PrimeVue from 'primevue/config';
import Chips from "primevue/chips";
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import ScrollPanel from 'primevue/scrollpanel';

const app= createApp(App);

app.use(PrimeVue, { ripple: true });

app.component("Chips", Chips);
app.component("ScrollPanel", ScrollPanel);

app.component("InputText", InputText);
app.component("Textarea", Textarea);
app.component("Dropdown", Dropdown);

app.mount('#app');
