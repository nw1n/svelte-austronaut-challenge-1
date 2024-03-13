<script lang="ts">
	import AddAstronautForm from '$lib/components/AddAstronautForm.svelte';
	import SpaceStation from '$lib/components/SpaceStation.svelte';
	import { SpaceStations } from '$lib/model/space.stations.model';

	function onAstronautAdded(name: string, station: SpaceStations) {}
</script>

<main>
	<SpaceStation name={SpaceStations.Iss}></SpaceStation>
	<SpaceStation name={SpaceStations.Tiangong}></SpaceStation>
	<img id="rocket" src="/rocket.png" alt="Rocket" />
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
		grid-template-rows: auto max-content max-content;
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

	#add-astronaut-form,
	#rocket {
		grid-column: span 2;
	}

	#add-astronaut-form {
		padding-bottom: 6rem;
	}

	#rocket {
		align-self: end;
		height: 250px;
	}
</style>
