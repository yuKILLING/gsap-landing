import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import components from '@/components/UI';
import './assets/css/tailwind.css';


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

app.mount('#app');