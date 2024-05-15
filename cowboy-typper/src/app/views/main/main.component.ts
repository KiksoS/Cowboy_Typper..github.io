import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,GameComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  record: (string | undefined| null) [][] = [];
  formName = new FormGroup ({
    CharName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]*")])
  })

  constructor(private router: Router) {
  
  }

  public onSubmit() :void {
    
    
    if (this.formName.valid) {
      console.log("es valido");
      this.record[0] = [this.formName.value.CharName,'2000'];
      this.router.navigate(['game'],{queryParams:{CharName: this.formName.value.CharName}})
    }else {
      console.log("not valid");
    }
    
  }
}
