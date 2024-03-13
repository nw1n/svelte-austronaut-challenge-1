<script lang="ts">
	import SpaceStation from '$lib/components/SpaceStation.svelte';
</script>

<main>
	<SpaceStation name="ISS"></SpaceStation>
	<SpaceStation name="Tiangong"></SpaceStation>
</main>

<style>
	main {
		font-family: 'Roboto';
		color: white;

		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		align-items: center;

		background-image: url('/background.jpg');
		background-size: cover;

		height: 100vh;
		width: 100vw;
	}

	span {
		font-size: 48px;
		letter-spacing: 8px;
	}
</style>
