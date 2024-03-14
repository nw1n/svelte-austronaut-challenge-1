<script lang="ts">
	import type { SpaceStationModel } from '..';

	let { spaceStation }: { spaceStation: SpaceStationModel } = $props();

	let image = $derived(`/${spaceStation.name?.toLocaleLowerCase()}.png`);
</script>

<div class="space-station-container">
	<h1>{spaceStation.name}</h1>
	<img src={image} alt={spaceStation.name} />
	{#if spaceStation.capacityReached}
		<section id="max-capacity">
			<p>Capacity reached, please send some astronauts back to earth</p>
		</section>
	{/if}
	<section class="astronauts">
		{#snippet astronautsList(astronauts)}
			<ul>
				{#each astronauts as astronaut}
					<li>{astronaut.name}</li>
				{/each}
			</ul>
		{/snippet}

		<h2>Astronauts</h2>
		{#if (spaceStation.astronauts?.length ?? 0) > 0}
			{@render astronautsList(spaceStation.astronauts)}
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

	#max-capacity {
		padding: 16px;
		background-color: lightcoral;
		color: black;
	}
</style>
