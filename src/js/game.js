import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        for (let i=0; i<1000; i++) {
            const ryanMirror = new Actor()
            ryanMirror.graphics.use(Resources.ryanMirror.toSprite())
            ryanMirror.pos = new Vector(Math.random() * 1280, Math.random() * 720)
            ryanMirror.vel = new Vector(Math.random() * 200 - 100, Math.random() * 200 - 100) //change/second

            ryanMirror.scale = new Vector (Math.random() * 0.75 - 0.5, Math.random() * 0.75 - 0.5)

            ryanMirror.events.on("exitviewport", (e) => this.positionChange(e))
            this.add(ryanMirror)
        }
        
        
    }

    positionChange(e) {
        e.target.pos = new Vector(Math.random() * 1280, Math.random() * 720)
    }
}

new Game()
