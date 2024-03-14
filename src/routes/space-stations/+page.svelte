<script lang="ts">
	import AddAstronautForm from '$lib/components/AddAstronautForm.svelte';
	import SpaceStation from '$lib/components/SpaceStation.svelte';
	import { SpaceStations } from '$lib/model/space.stations.model';
	import type { Astronaut } from '../../lib';
	import { loadAstronauts } from './astronaut-api.loader.svelte';

	let astronauts = getAstronauts();

	async function getAstronauts(): Promise<{
		[SpaceStations.Iss]: Astronaut[];
		[SpaceStations.Tiangong]: Astronaut[];
	}> {
		const astronauts = await loadAstronauts();
		const astronautsOnIss = astronauts.filter((astronaut) => astronaut.craft === SpaceStations.Iss);
		const astronautsOnTiangong = astronauts.filter(
			(astronaut) => astronaut.craft === SpaceStations.Tiangong
		);
		return { [SpaceStations.Iss]: astronautsOnIss, [SpaceStations.Tiangong]: astronautsOnTiangong };
	}

	async function onAstronautAdded(name: string, station: SpaceStations) {
		const existingAstronauts = await astronauts;
		astronauts = Promise.resolve({
			...existingAstronauts,
			[station]: [...existingAstronauts[station], <Astronaut>{ name, craft: station }]
		});
	}
</script>

<main>
	{#await astronauts}
		<h2 class="center">Loading astronauts 🛰️...</h2>
	{:then spaceStations}
		<SpaceStation name={SpaceStations.Iss} astronauts={spaceStations.ISS}></SpaceStation>
		<SpaceStation name={SpaceStations.Tiangong} astronauts={spaceStations.Tiangong}></SpaceStation>
	{:catch}
		<h2 class="center">The astronauts were intercepted by aliens 👽</h2>
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
