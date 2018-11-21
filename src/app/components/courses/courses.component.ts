import { Component, Input, Output, EventEmitter,OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyService  } from '../../service/myservice.service';

@Component({
 selector: 'app-courses',
 templateUrl: './courses.component.html'
}
)
export class CoursesComponent implements OnInit,OnChanges {
    @Input() 
    courseList: Array<string> = [];
    @Output() onListClick: EventEmitter<string> = new EventEmitter();

    @Output() onHover: EventEmitter<string> = new EventEmitter(); 
    
    tempObservable: Subject<string> = new Subject();

    ngOnInit(){
        console.log('testing oninit');
        let couseStream = this.myService.sendData(['c','java','c++']);
        couseStream.subscribe(res => {
            console.log('course component',res);
        });

        //http service
        this.myService.getPosts().subscribe(res => {
            debugger
            console.log(res);
        },err => {
            debugger
        });
    }

    ngOnChanges(changes: SimpleChanges){
        for(let prop in changes){
            console.log(changes[prop]);
            console.log(prop);
            if(prop === 'courseList' && changes[prop].currentValue.indexOf('python') > -1){
                //alert('we got a python');
            }else if(prop === 'courseList' && changes[prop].currentValue.indexOf('python') === -1){
                //alert('we lost the python');
            }
        }
    }

    ngAfterViewInit(){

    }



    ngOnDestroy(){
        this.myService.busService.unsubscribe();
        alert('component is destroyinh now');
    }


    funct(value) {
        console.log(""+ value);
    }

    
    constructor(private myService: MyService){
        this.tempObservable.subscribe(x=>{
            console.log(x);
        });
        this.myService.busService.subscribe(res=>{
            console.log('course bus',res);
        });
    }

    itemClicked(item:string){
        this.onListClick.next(item);
        this.tempObservable.next(item);
        // service

        this.myService.sendData(['c','c++']);
    }

    itemHovered(item:string){
        this.onHover.next(item);
    }
}