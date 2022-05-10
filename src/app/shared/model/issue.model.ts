import { Artist } from "./artist.model";
import { Volume } from "./volume.model";

export class Issue{
    id: number;
    number: number;
    urlCover: string;
    volume: Volume;
    artists: Artist[];
}