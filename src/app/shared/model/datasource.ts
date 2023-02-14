import { Observable } from 'rxjs';

export interface IDatasource {
  collectionName: string;
  create(item: any): void;
  update(item: any): void;
  get(item: any): Observable<any>;
  list(): Observable<any[]>;
  delete(item: any): void;
}
