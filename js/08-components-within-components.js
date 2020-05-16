Vue.component('task-list', {
	template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',

	data() {
		return {
			tasks: [
				{ description: 'Go to the store', status: true },
				{ description: 'Buy a sauce', status: false },
				{ description: 'Close your heart', status: true },
				{ description: 'Run 10km for today', status: false },
				{ description: 'Kill all the villains', status: true },
			]
		};
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>',
});

var app = new Vue({
	el: '#root',

	data: {

	}
})