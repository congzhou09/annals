import Vue from 'vue';
import App from './app.vue';
import './style/all.css';
import 'animate.css/animate.min.css';
import VConsole from 'vconsole';
import FastClick from 'fastclick';
import ClickPassword from 'click-password';

FastClick.attach(document.body); // fast-click
setTimeout(() => {
  // 防止干扰主程序初始化速度，将ServiceWorker的初始化放到主线程执行队列的队尾
  console.log('serviceWorker init');
  import('offline-plugin/runtime').then(swRuntime => {
    swRuntime.install({
      onUpdateReady: () => {
        console.log('sw onUpdateReady');
        swRuntime.applyUpdate(); // 作用相当于原生ServiceWorker的self.skipWaiting()
      },
      onUpdated: () => {
        // 作用相当于原生ServiceWorker的监听 controllerchange 事件
        console.log('sw onUpdated');
        window.location.reload();
      }
    });
  }, 0);
});

new Promise((resolve, reject) => {
  try {
    window.vConsole = new VConsole({
      onReady() {
        window.vConsole.hideSwitch();
        resolve();
      }
    });
  } catch (err) {
    reject(err);
  }
})
  .then(() => {
    new Vue({
      el: '#app',
      render: h => h(App),
      created() {
        new ClickPassword('ABCDB', () => {
          window.vConsole.showSwitch();
        });
      }
    });
  })
  .catch(err => {
    alert(`发生未预期的错误:${err}`);
  });
