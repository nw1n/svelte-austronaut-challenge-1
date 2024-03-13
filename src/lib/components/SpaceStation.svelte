<script lang="ts">
	import type { Astronaut } from '../model/astronaut.model';

	let { name, astronauts }: { name: 'ISS' | 'Tiangong'; astronauts?: Astronaut[] } = $props();

	let image = $derived(`/${name.toLocaleLowerCase()}.png`);
</script>

<div class="space-station-container">
	<h1>{name}</h1>
	<img src={image} alt={name} />
	<section class="astronauts">
		{#snippet astronautsList(astronauts)}
			<ul>
				{#each astronauts as astronaut}
					<li>{astronaut}</li>
				{/each}
			</ul>
		{/snippet}

		<h2>Astronauts</h2>
		{#if astronauts}
			{@render astronautsList(astronauts)}
		{:else}
			<p>This station is empty</p>
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
</style>
