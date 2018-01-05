import {Component} from "@angular/core";
import { style } from "@angular/core/src/animation/dsl";


@Component({
    selector: "app-success-alert",
    templateUrl: "./successalert.component.html",
    styles: [`
        p{
            padding: 20px;
            background-color: green;
            border: 1px solid green;
        }
    `]
})
export class SuccessAlertComponent{

}