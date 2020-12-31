import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/images/slide-show/slide-show.json'


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  images: String[] = data['files'];
  filePath = "../../assets/images/slide-show/"


  constructor() { }

  ngOnInit(): void {
  }

}
