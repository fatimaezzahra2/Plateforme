export class Upload{
  latitude: number;
  longitude: number;
  projectId:string;

  constructor(latitude:number, longitude:number,projectId:string) {
    this.latitude=latitude;
    this.longitude=longitude;
    this.projectId=projectId;
  }

}
