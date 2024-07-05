export class Project{
  id:string;
  name:string;
  ville:string;
  latitude:number;
  longitude:number;
  system:string[];


  constructor(id: string, name: string, ville: string, latitude: number, longitude: number, system: string[]) {
    this.id = id;
    this.name = name;
    this.ville = ville;
    this.latitude = latitude;
    this.longitude = longitude;
    this.system = system;
  }
}
