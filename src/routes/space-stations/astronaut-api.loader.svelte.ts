import type { Astronaut } from '$lib';

export async function loadAstronauts(): Promise<Astronaut[]> {
	return fetch('http://api.open-notify.org/astros.json')
		.then((response) => response.json())
		.then((dto) => dto.people);
}
