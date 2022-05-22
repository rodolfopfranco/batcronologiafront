import { Component, Input, OnInit } from '@angular/core';
import { BookChrono } from 'src/app/shared/model/book-chrono.model';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent implements OnInit {

  @Input()
  bookChronoView: BookChrono;

  constructor() { }

  ngOnInit(): void {
  }

}
