Vue.component('message', {
	props: ['title', 'body'],

	data() {
		return {
			isVisible: true
		};
	},

	template: `
		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    <p>{{ title }}</p>
		    <button @click="toggleVisible" aria-label="delete"></button>
		    <button @click="isVisible = false" aria-label="delete"></button>
		  </div>
		  <div class="message-body">
		    {{ body }}
		  </div>
		</article>
	`,

	methods: {
		toggleVisible() {
			this.isVisible = false
		}
	}
});

var app = new Vue({
	el: '#root'
})