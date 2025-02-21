import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-gcloud',
  standalone: true,
  imports: [],
  templateUrl: './gcloud.component.html',
  styleUrl: './gcloud.component.css'
})
export class GcloudComponent {

  @Input() id: number = 0;
  position: number = 0;
  isMoved: boolean = true;


  ngOnInit(): void {
    
    if (this.id == 1) {
      
      setInterval(() =>{
        this.setPosition()
      },1000)
      
    }else {

      setInterval(() =>{
        this.setPosition()
      },2000)

    }
    
  }

  setPosition () {

    if (this.isMoved) {
      this.position += 20;
    }else{
      this.position -= 20;
    }
    this.isMoved = !this.isMoved
  }

}
