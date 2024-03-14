import type { Astronaut } from '..';

export enum SpaceStationNames {
	Iss = 'ISS',
	Tiangong = 'Tiangong'
}

export class SpaceStationModel {
	name = $state<SpaceStationNames>();
	capacity = $state<number>();
	astronauts = $state<Astronaut[]>();

	capacityReached = $derived((this.astronauts?.length ?? 0) >= (this.capacity ?? 0));

	constructor(name: SpaceStationNames, capacity: number, astronauts: Astronaut[] = []) {
		this.name = name;
		this.capacity = capacity;
		this.astronauts = astronauts;
	}
}
