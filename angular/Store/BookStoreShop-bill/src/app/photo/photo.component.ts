import { Component ,OnInit} from '@angular/core';
import { Photo, PhotoComponentStore } from '../photo.ComponentStore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  
  photos$? : Observable<Photo[]>;
  actionPhoto$?: Observable<Photo>;

  constructor(private _photoCS:PhotoComponentStore){
    this.actionPhoto$ = this._photoCS.actionPhoto$
  }
  ngOnInit(): void {
    
  }

  nextPhoto(n:number){
    this._photoCS.getNextPhoto(n)
  }

}
