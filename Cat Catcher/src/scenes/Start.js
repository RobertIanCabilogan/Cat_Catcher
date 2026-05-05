export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }



    preload() {
            this.load.image('cat', 'assets/Cat.png');
            this.load.image('catcher', 'assets/Catcher.png');
            this.load.image('bg', 'assets/Background.png');
    }

    create() {
        this.add.sprite(0,0,'bg').setScale(2);
        this.catcher = this.physics.add.sprite(400,300, 'catcher').setScale(0.5);
        this.catcher.setOrigin(0,0);
        this.cat = this.physics.add.sprite(Math.random() * this.scale.width, Math.random() * this.scale.height, 'cat').setScale(0.2);

        this.score = 0;
        let style = {font: '20px Arial', fill: '#FFF'};
        this.txtScore = this.add.text(10,10,this.score.toString(), style);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.overlap(this.catcher, this.cat, this.catchCat, null, this);
    }

    update() {
        if(this.cursors.left.isDown){
            this.catcher.x -= 5;
        }
        if(this.cursors.right.isDown){
            this.catcher.x += 5;
        }
        if(this.cursors.up.isDown){
            this.catcher.y -=5;
        }
        if(this.cursors.down.isDown){
            this.catcher.y += 5;
        }
    }

    catchCat() {
        this.score++;

        // Update screen
        this.txtScore.setText('Score: ' + this.score);

        // Log to console
        console.log('Score:', this.score);

        // Move cat randomly
        this.cat.setPosition(
            Math.random() * this.scale.width,
            Math.random() * this.scale.height
        );
    }
    
}
