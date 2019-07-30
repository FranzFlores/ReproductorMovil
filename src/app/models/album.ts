import { Artist } from './artist';

export class Album {
    id: String;
    title:String;
    description:String;
    external_id:String;
    artist:Artist;
    year:Number;
    status:Boolean;
    image:String;
}