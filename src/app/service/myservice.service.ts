import { Injectable } from '@angular/core';
import { Observable ,of, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MyService {
    constructor(private http:HttpClient){

    }
     public transportService = of([]);
     public busService: Subject<Array<string>> = new Subject();
     private buses= ['tata','fiat','temp'];

     sendData(test: Array<string>){
        this.transportService = of(test);
         return this.transportService;
     }

     setListOfBuses(){
        this.busService.next(this.buses);
     }

     addNewBus(nBus){
         this.buses.push(nBus);
        this.busService.next(this.buses);
     }

     getPosts(){
         return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     }


}