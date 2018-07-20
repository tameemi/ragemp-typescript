function setArmour(player: PlayerMp) {
    player.health = 1;
}
mp.events.addCommand('armour', setArmour);