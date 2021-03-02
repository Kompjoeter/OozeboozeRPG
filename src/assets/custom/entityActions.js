export function entityAttack(entity) {
    var logMessage = {
        message: entity.nameFirst + " " + entity.nameLast + " the " + entity.species +" strikes with their " + entity.weapon, 
        player: entity.isPlayer,
    }
    return logMessage;
}