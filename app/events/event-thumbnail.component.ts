import {Component, Input, Output, EventEmitter} from '@angular/core'
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail" >
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Lately Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, 
            {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl"> 
        OnlineUrl: {{event?.onlineUrl}}
        </div>
        <!--<button class="btn btn-primary" (click)="logFoo()
            ">Click me! </button> -->
    </div>
    `,
    styles: [`
    .green {color: #003300 !important;}
    .bold {font-weight: bold;}
    .pad-left {margin-left: 10px;}
    .well div {color: #bbb;}
    .thumbnail {min-height: 210px;}
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent

    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {green: isEarlyStart, bold: isEarlyStart}
        /*
        -- Another option to return
        if(this.event && this.event.time === '8:00 am')
            return 'green bold' --or -- return ['green', 'bold']
        return '' --or -- return []
        */
    }

    //Used as getStartTimeClass() but use [ngStyle] instead [ngClass]
    getStartTimeStyle():any{
        if(this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'}
        return {}
    }


    /* @Output() eventClick = new EventEmitter()

    handleClickMe(){
         this.eventClick.emit(this.event.name)
    }

    someProperty:any = "some value"
    logFoo(){
        console.log('foo')
    }
    */

}