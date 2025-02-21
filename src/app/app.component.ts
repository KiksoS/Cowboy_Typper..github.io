import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { GameComponent } from './views/game/game.component';
import { GcloudComponent } from './component/gcloud/gcloud.component';
import { FormControl, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { TpperComponent } from './component/tpper/tpper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent, FooterComponent, GameComponent,ReactiveFormsModule, GcloudComponent,TpperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'cowboy-typper';
}
