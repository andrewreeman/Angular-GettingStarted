import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export default class StarComponent extends Component implements OnChanges {    
    @Input() rating: number = 3
    starWidth: number

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

    ngOnChanges(): void {
        console.log("Called")
        this.starWidth = this.rating * 75 / 5
    }

    onClick() {
        this.ratingClicked.emit(`${this.rating}`)
    }

    
} 