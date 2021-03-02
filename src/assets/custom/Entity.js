export class Entity {
    constructor(isPlayer, nameFirst, nameLast, species, weapon) {
        this.isPlayer = isPlayer;
        this.nameFirst = nameFirst;
        this.nameLast = nameLast;
        this.species = species;
        this.weapon = weapon;
    }
}

export function entityCreate(isPlayer, nameFirst, nameLast, species, weapon)
{
    console.log('running entityCreate() 👶');
    return new Entity(isPlayer, nameFirst, nameLast, species, weapon);
}
