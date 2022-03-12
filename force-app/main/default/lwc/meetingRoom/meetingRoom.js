import { api, LightningElement, wire } from 'lwc';
import {fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    //*Use @api decorator to define public properties in your component.
    //*Values of these properties can be supplied by parent component.
    @api meetingRoomInfo; //{roomName:'A-01', roomCapacity:'12'}

    @api showRoomInfo = false;

    @wire(CurrentPageReference) pageReference;

    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail: this.meetingRoomInfo, bubbles :true});
        this.dispatchEvent(tileClicked);
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
    }
}