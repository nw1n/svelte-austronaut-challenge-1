<script lang="ts">
	import type { Astronaut } from '../model/astronaut.model';
	import type { SpaceStations } from '../model/space.stations.model';

	let { name, astronauts }: { name: SpaceStations; astronauts?: Astronaut[] } = $props();

	let image = $derived(`/${name.toLocaleLowerCase()}.png`);
</script>

<div class="space-station-container">
	<h1>{name}</h1>
	<img src={image} alt={name} />
	<section class="astronauts">
		{#snippet astronautsList(astronauts)}
			<ul>
				{#each astronauts as astronaut}
					<li>{astronaut.name}</li>
				{/each}
			</ul>
		{/snippet}

		<h2>Astronauts</h2>
		{#if (astronauts?.length ?? 0) > 0}
			{@render astronautsList(astronauts)}
		{:else}
			<p>Such empty, much wow</p>
		{/if}
	</section>
</div>

<style>
	h1 {
		text-align: center;
	}

	img {
		width: 400px;
	}

	ul {
		padding-left: 16px;
	}
</style>
