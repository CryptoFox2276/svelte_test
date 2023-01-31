<script>
	import 'bootstrap';
	import '../app.scss';
	import './styles.css';
	import Header from './Header.svelte';
	import Notifications from 'svelte-notifications';
</script>

<Notifications>
	<div class="app">
		<Header />
		<main>
			<div>
				<slot />
			</div>
		</main>
	</div>
</Notifications>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: 0;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
	}
	@media (max-width: 760px) {
		main {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
