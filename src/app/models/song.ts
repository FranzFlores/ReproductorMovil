import {Album} from './album';

export class Song {
    id: String;
    title:String;
    number:Number;
    file:String;
    image:String;
    external_id:String;
    album:Album;
    artist:String;
}