import { Artist } from './artist';
import { Song } from './song';

export class Album {
    id: String;
    title:String;
    description:String;
    external_id:String;
    artist:Artist;
    year:Number;
    status:Boolean;
    image:String;
    songs: Song[];
}