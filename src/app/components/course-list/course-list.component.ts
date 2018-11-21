import { Component } from '@angular/core';
import { MyService } from '../../service/myservice.service';

@Component({
 selector: 'app-courses-list',
 templateUrl: './course-list.component.html',
 styleUrls: ['./course-list.component.css']
}
)
export class CoursesListComponent {
    coursesList: Array<string> = ['math test','science','c','c++'];
    show: boolean = true;
    
    clickedItem: string = '';
    hoverItem: string ='';
    constructor( private myService: MyService){
        this.myService.transportService.subscribe(res => {
            console.log('course List',res);
        });
        //this.myService.setListOfBuses();
        this.myService.busService.subscribe(res=>{
            console.log('course list buses',res);
        });
    }

    getItem(item:string){
        this.clickedItem = item;
        let temp = [];
        Object.assign(temp,this.coursesList);
        temp.push('python');
        this.coursesList = temp;
        this.myService.busService.next([item]);
        

        
    }
    getItemHover(event) {
        this.hoverItem = event;
    }

    remove(){
        this.show = false;
        this.coursesList = this.coursesList.filter(x => {
            return x !== 'python';
        })
    }
}