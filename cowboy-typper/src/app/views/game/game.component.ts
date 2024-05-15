import { Component } from '@angular/core';
import { CloudComponent } from '../../component/cloud/cloud.component';
import { ActivatedRoute } from '@angular/router';
import { GcloudComponent } from '../../component/gcloud/gcloud.component';
import { TpperComponent } from '../../component/tpper/tpper.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [GcloudComponent,CloudComponent,TpperComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  CharName: string = "";
  bulletX: number = 0;
  score: number = 0;
  isDead: boolean = false;
  idEnemy: number = 1;
  positionEnemy: number = 0;
  isWalking: boolean = false;
  touching: boolean = false;
  game: boolean = false;
  

  constructor(private route: ActivatedRoute,private router: Router) {

  }


  //Esta funcion imprime el nombre del jugador

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.CharName = params['CharName'];
    });

    setInterval(() => {
      console.log("este es el valor de game: " + this.game)
      if (this.game) {
        this.move();
      }else {
        this.positionEnemy = 0;
        this.score = 0;
      }
    }, 1000);
  
    //this.newEnemy()
  }


  setGame(game:boolean){

    this.game = game
  }


  //Compara las dos posiciones entre la bala y el enemigo para saber si se han chocado
  isColliding(elem1: HTMLElement, elem2: HTMLElement) {
    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();
    return !(rect1.right < rect2.left || rect1.left > rect2.right);
  }


  //esta funcion mueve la bala hasta que impacta en un enemigo y se resetea
  shoot():void {
    let breakpoint = 0;
    let shooted = document.querySelector(".bullet")  as HTMLElement;
    let bullet = document.querySelector(".bullet img")  as HTMLElement;
    let enemy = document.querySelector(".enemy img")  as HTMLElement;
    shooted?.classList.add('isShooted');

    while (shooted?.classList.contains('isShooted')) {
      this.bulletX -= Math.floor(Math.random() * (50 - 45)) + 45
      bullet.style.display = 'flex';
      bullet.style.right = this.bulletX + "px";
      bullet.style.left = '';
      breakpoint++
      console.log(enemy.style.left + " es undefined?")
      if (this.isColliding(bullet, enemy)) {
        this.Ondeath();
        bullet.style.display = 'none';
        this.score += Math.floor(Math.random() * (25 - 10)) + 10;
        this.bulletX = 0
        bullet.style.left = '0px';
        bullet.style.right = this.bulletX + "px";
        break
      }
      

      if (breakpoint > 1) {
        break
      }


    }
  }


  Ondeath(): void {
    this.positionEnemy = 0
    this.move();
    this.diffEnemy();

    
  }

  diffEnemy() {
    if (this.idEnemy == 1) {
      this.idEnemy = 2
    } else {
      this.idEnemy = 1
    }
  }

  move(): void {
      let enemy = document.querySelector(".minion") as HTMLElement;
      let character = document.querySelector(".character") as HTMLElement;
      if (enemy && this.game) {
        this.positionEnemy -= Math.floor(Math.random() * (55 - 35)) + 35; // Mueve el elemento hacia la izquierda
        enemy.style.display = 'flex';
        enemy.style.left = this.positionEnemy + "px";
      }

      if (this.isColliding(character, enemy)) {
        console.log("Es verdadero por algun motivo")
        this.router.navigate(['/main']);
      }
        this.isWalking = !this.isWalking;
  }


  /* newEnemy () {
    let enemy = document.querySelector(".enemy") as HTMLElement;

    setInterval(() => {
      if (enemy) {
        let newEnemy = enemy.cloneNode(true) as HTMLElement;
        enemy.parentElement?.appendChild(newEnemy);
        newEnemy.style.left = '0px'
        newEnemy.style.left = ''
        this.move()
        
      }
    },5000)
  } */

}
