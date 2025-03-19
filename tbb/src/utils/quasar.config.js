import quasarLang from 'quasar/lang/zh-CN'; //quasar语言
import '@quasar/extras/material-icons/material-icons.css'; // 谷歌图标
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'; // bootstrap图标

import {
	Quasar,
	Notify,
	Loading,
	AddressbarColor,
	Cookies 
} from 'quasar';

// 通知默认情况
Notify.setDefaults({
	position: 'top',
	timeout: 2000,
	textColor: 'white',
});
// 成功情况
Notify.registerType('success', {
	icon: 'bi-check-circle-fill',
	color: 'positive',
	textColor: 'white',
});
// 失败情况
Notify.registerType('error', {
	icon: 'bi-x-circle-fill',
	color: 'negative',
	textColor: 'white',
});
// 通知情况
Notify.registerType('info', {
	icon: 'info',
	color: 'secondary',
	textColor: 'white',
});

export default {
	install(Vue) {
		Vue.use( Quasar, {
			plugins: {
				Notify,
				Loading,
				AddressbarColor,
				Cookies 
			},
			config: {
				notify: { /* look at QuasarConfOptions from the API card */ }
			},
			lang: quasarLang,
		});
	},
};