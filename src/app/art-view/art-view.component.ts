import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-art-view',
  templateUrl: './art-view.component.html',
  styleUrls: ['./art-view.component.css']
})
export class ArtViewComponent implements OnInit {
  searchValue: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSearch(searchValue: string){
    var str = searchValue.split(' ').join('%20')
    console.log(str)
    this.dataService.uniqueArtSearch(searchValue);
  }

}
