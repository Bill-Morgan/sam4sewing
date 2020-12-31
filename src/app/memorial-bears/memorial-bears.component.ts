import { Component, OnInit } from '@angular/core';
import * as data from "../../assets/images/memorialbears/memorialbears.json"

@Component({
  selector: 'app-memorial-bears',
  templateUrl: './memorial-bears.component.html',
  styleUrls: ['./memorial-bears.component.css']
})
export class MemorialBearsComponent implements OnInit {
  images = data["files"];
  filePath = "../../assets/images/memorialbears/"
  constructor() { }

  ngOnInit(): void {
  }

}
