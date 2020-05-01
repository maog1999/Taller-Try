class cuadrado extends figuras{
    constructor(){
        super();
        this.posX = 790;
        this.color = (255,0,0);
        this.vel = 4;
    }

    pintar(posY){
        //fill(255,0,0);
        rect(this.posX,posY,this.tama,this.tama);
    }
    move(){
        this.posX += this.vel;
        if(this.posX <= 0 || this.posX >= 795){
            this.vel *= -1;
        }
    }
}