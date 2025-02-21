import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  img: string = 'https://www.svgrepo.com/show/532511/play.svg';
  isPlayed: boolean = true;
  
  constructor( public dialog: MatDialog) {

  }

  ngOnInit(): void {
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.volume = 0.3; // Establece el volumen predeterminado al 50%
  }

  openModal() {
    this.dialog.open(ModalComponent);
  }

  music(): void {
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    if (this.isPlayed) {
      audio.pause();
      this.isPlayed = false;
      this.img = 'https://www.svgrepo.com/show/514191/pause.svg';
    } else {
      audio.play();
      this.isPlayed = true;
      this.img = 'https://www.svgrepo.com/show/532511/play.svg';
    }
  }
}
