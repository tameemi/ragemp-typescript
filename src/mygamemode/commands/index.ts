function setArmour(player: PlayerMp) {
    player.armour = 100;
}
mp.events.addCommand('armour', setArmour);