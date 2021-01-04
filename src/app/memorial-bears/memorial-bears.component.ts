import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from "../../assets/images/memorialbears/memorialbears.json"

@Component({
  selector: 'app-memorial-bears',
  templateUrl: './memorial-bears.component.html',
  styleUrls: ['./memorial-bears.component.css']
})
export class MemorialBearsComponent implements OnInit {
  index = null;
  images = data["files"];
  filePath = "../../assets/images/memorialbears/"
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
       this.index = params['startIndex'];
    });
  }
}
