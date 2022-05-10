import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/shared/model/artist.model';
import { ResponsePageable } from 'src/app/shared/model/response-pageable.model';
import { ArtistService } from 'src/app/shared/service/artist.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  artistas: Artist[];
  displayedColumns: string[] = ['name','role'];

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getArtists().subscribe(
      (observable: ResponsePageable) => {
        this.artistas = observable.content;
      }
    );
  }

  listArtist(): void{
    this.artistas.forEach(a => console.log(a));
  }

}
