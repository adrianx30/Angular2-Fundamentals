import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events </h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)" 
                    [event] ="event"></event-thumbnail> 
                
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

    events:IEvent[]

    constructor(private eventService:EventService, private toastr:ToastrService, private route: ActivatedRoute  ){        
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName){
        //console.log('Testing...')
        this.toastr.success(eventName)
    }

    /*
    handleEventClickced(data){
        console.log('received:', data)
    }
    */    
}