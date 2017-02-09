import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events </h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail #thumbnail  [event]
                ="event"></event-thumbnail> 
                <!--//inside the above tag (eventClick)="handleEventClickced($event)" --> 
                <!--<h3>{{thumbnail.someProperty}}</h3>
                <button class="btn btn-primary" (click)="thumbnail.logFoo()">
                Log me some foo </button>-->
            </div>
        </div>      
    </div>
    `
})


export class EventsListComponent implements OnInit {

    events:any[]
    constructor(private eventService: EventService){
        
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }

    /*
    handleEventClickced(data){
        console.log('received:', data)
    }
    */

    
}