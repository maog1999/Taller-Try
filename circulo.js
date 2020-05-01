class circulo extends figuras{
    constructor(){
        super();
        this.posX = 2;
        this.color = (0,0,255);
        this.vel = 6;
    }

    pintar(posY){
        ellipse(this.posX,posY,this.tama,this.tama);
    }
    move(){
        this.posX += this.vel;
        if(this.posX <= 0 || this.posX >= 800){
            this.vel *= -1;
        }
    }
}