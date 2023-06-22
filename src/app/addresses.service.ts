import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addresses } from './Addresses';
Addresses
@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  //private url = ;
 
  getAddresses(){
    const params = {
      size:25
    }
    return this.http.get<Addresses>('https://random-data-api.com/api/v2/addresses',{params:params});
  }
  constructor(private http:HttpClient) { }
}
