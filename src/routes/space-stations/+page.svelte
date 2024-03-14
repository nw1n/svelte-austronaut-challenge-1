<script lang="ts">
	import { SpaceStationModel, SpaceStationNames, type Astronaut } from '$lib';
	import AddAstronautForm from '$lib/components/AddAstronautForm.svelte';
	import SpaceStation from '$lib/components/SpaceStation.svelte';
	import { loadAstronauts } from './astronaut-api.loader.svelte';

	let spaceStations = getSpaceStations();

	async function getSpaceStations(): Promise<SpaceStationModel[]> {
		const astronauts = await loadAstronauts();
		const astronautsOnIss = astronauts.filter(
			(astronaut) => astronaut.craft === SpaceStationNames.Iss
		);
		const astronautsOnTiangong = astronauts.filter(
			(astronaut) => astronaut.craft === SpaceStationNames.Tiangong
		);

		return [
			new SpaceStationModel(SpaceStationNames.Iss, 10, astronautsOnIss),
			new SpaceStationModel(SpaceStationNames.Tiangong, 5, astronautsOnTiangong)
		];
	}

	async function onAstronautAdded(name: string, station: SpaceStationNames) {
		const allSpaceStations = await spaceStations;
		const spaceStationToUpdate = allSpaceStations.find(
			(spaceStation) => spaceStation.name === station
		);
		if (spaceStationToUpdate && spaceStationToUpdate.astronauts) {
			spaceStationToUpdate.astronauts = [
				...spaceStationToUpdate.astronauts,
				<Astronaut>{ name, craft: station }
			];
		}
	}
</script>

<main>
	{#await spaceStations}
		<h2 class="center">Loading astronauts 🛰️...</h2>
	{:then spaceStations}
		{#each spaceStations as spaceStation}
			<SpaceStation {spaceStation}></SpaceStation>
		{/each}
	{:catch error}
		<h2 class="center">The astronauts were intercepted by aliens 👽</h2>
		{@debug error}
	{/await}

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
	#rocket,
	.center {
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
