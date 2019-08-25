import {Album} from './album';
export class Artist {
    id: String;
    name:String;
    description:String;
    image:String;
    external_id:String;
    albums: Album[];
}