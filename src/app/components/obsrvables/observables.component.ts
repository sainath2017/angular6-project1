import { Component, Input, Output, EventEmitter,OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { MyService  } from '../../service/myservice.service';

@Component({
 selector: 'app-observables',
 templateUrl: './observables.component.html'
}
)
export class ObservableComponent {

    myArray: Array<string> = ['c','c++', 'java', 'python'];

    ngOnInit(){
        this.createObservale();
    }

    createObservale(){
        //creating an observable
        let myObservable = Observable.create(observer=>{
            observer.next('Test');
        });

        myObservable.subscribe(response => {
            //alert(response);
        });
        // creating stream of static data
        let staticStream = of(this.myArray);
        staticStream.subscribe(res=> {
            console.log("staticStream",res);
        })
    }
    
}