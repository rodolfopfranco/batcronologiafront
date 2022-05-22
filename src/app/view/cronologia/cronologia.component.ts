import { Component, Input, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { BookChrono } from 'src/app/shared/model/book-chrono.model';
import { ResponsePageable } from 'src/app/shared/model/response-pageable.model';
import { BookChronoService } from 'src/app/shared/service/book-chrono.service';
import { ComicCardComponent } from './comic-card/comic-card.component';

@Component({
  selector: 'app-cronologia',
  templateUrl: './cronologia.component.html',
  styleUrls: ['./cronologia.component.css']
})
export class CronologiaComponent implements OnInit {

  bookChronoList: BookChrono[];

  constructor(private bookChronoService: BookChronoService) { }

  ngOnInit(): void {
    this.bookChronoService.getBookchronoList().subscribe(
      (observable:ResponsePageable) =>{
        this.bookChronoList = observable.content;
      }
    )
  }

}
