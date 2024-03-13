<script lang="ts">
	import AddAstronautForm from '$lib/components/AddAstronautForm.svelte';
	import SpaceStation from '$lib/components/SpaceStation.svelte';
	import { SpaceStations } from '$lib/model/space.stations.model';

	function onAstronautAdded(name: string, station: SpaceStations) {}
</script>

<main>
	<SpaceStation name={SpaceStations.Iss}></SpaceStation>
	<SpaceStation name={SpaceStations.Tiangong}></SpaceStation>
	<div id="add-astronaut-form">
		<AddAstronautForm {onAstronautAdded}></AddAstronautForm>
	</div>
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

	#add-astronaut-form {
		grid-column: span 2;
	}
</style>
