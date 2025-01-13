import { describe, expect, test } from '@jest/globals';
import { getPokemonById } from '../../src/js-foundation/07-async-await'
import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('js-foundations/07-async-await', () => {
    test('getPokemonById should return a Pokemón', async () => {
        const POKEMON_ID = 1;
        const POKEMON_NAME = 'bulbasaur'

        const pokemonResponse = await getPokemonById(POKEMON_ID, httpClientPlugin)

        expect(pokemonResponse.name).toBe(POKEMON_NAME) 
    })

    test('getPokemonById should throw error if the pokemon id does not exist', async () => {
        const POKEMON_ID = 1000000;

        try {
            await getPokemonById(POKEMON_ID, httpClientPlugin)
        } catch(error) {
            const errorTyped = error as Error;

            expect(errorTyped).toBeInstanceOf(Error);
            expect(errorTyped.message).toBe(`Error: the pokemon with the id ${POKEMON_ID} does not exist`)
        }
    })
})