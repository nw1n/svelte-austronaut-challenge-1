import type { Astronaut } from '$lib';

export async function loadAstronauts(): Promise<Astronaut[]> {
	return fetch('http://api.open-notify.org/astros.json')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Unable to load astronauts');
			}
			return response.json();
		})
		.then((dto) => dto.people);
}
