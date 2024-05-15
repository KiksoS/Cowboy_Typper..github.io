import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [],
  templateUrl: './cloud.component.html',
  styleUrl: './cloud.component.css'
})
export class CloudComponent {

  @Input() id: number = 0;
  position: number = 0;
  isMoved: boolean = true;

}
