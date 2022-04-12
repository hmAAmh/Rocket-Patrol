class menu extends Phaser.Scene{
    constructor(){
        super("menu");
    }
    create(){
        let menuText = this.add.text(20, 20, "epic");
        menuText.setOrigin(0.5, 0.5);

        this.scene.start("play");
    }
}