import {routes} from './routes.js';
import {checkUpdate} from './helpers/checkupdate.js';
import {existeSW} from './service-worker.js';
import { promptInstall } from './prompt-install.js';
import {feed} from './helpers/feed.js';
import {adminOptions} from './helpers/admin-options.js';
import {modoNoche} from './helpers/modoNoche.js';
document.addEventListener('DOMContentLoaded', (dom)=>{
    existeSW();
    promptInstall();
    checkUpdate();
    feed();    
    adminOptions();
    routes();
    modoNoche();
    document.querySelectorAll('img').forEach(img=>{
        if(img.alt === 'www.000webhost.com'){
            img.remove();
        }
    })
    if(document.querySelector('.disclaimer') !== undefined){
        document.querySelector('.disclaimer').remove()
    }    
});