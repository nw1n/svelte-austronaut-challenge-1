<script lang="ts">
	import { SpaceStations } from '../model/space.stations.model';

	let { onAstronautAdded }: { onAstronautAdded: (name: string, station: SpaceStations) => void } =
		$props();

	let nameValue = $state<string | undefined>();
</script>

<div class="add-astronaut-form-container">
	<section>
		<input type="text" bind:value={nameValue} placeholder="Enter a name..." />
		<select>
			{#each Object.entries(SpaceStations) as spaceStation}
				<option value={spaceStation[0]}>{spaceStation[1]}</option>
			{/each}
		</select>
	</section>

	<button disabled={!nameValue} type="button">Send {nameValue || '...'} to space 🚀</button>
</div>

<style>
	.add-astronaut-form-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		column-gap: 16px;
		row-gap: 24px;
		font-size: 20px;
	}

	input,
	button,
	select {
		border: none;
		padding: 16px;
		outline: none;
		font-size: 20px;
	}

	input,
	select {
		background-color: #ffffff80;
	}

	input {
		background-color: #ffffff80;
		width: 30ch;
	}

	button {
		background-color: lightgreen;
		color: black;
		cursor: pointer;
	}
	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
