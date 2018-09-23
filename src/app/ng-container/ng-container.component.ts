import {Component} from '@angular/core';

@Component({
    selector: 'app-ng-container',
    template: `
        <h1>ng-container</h1>
        <ul>
            <ng-container *ngFor="let item of list;let index=index">
                <li *ngIf="index%2 === 0">
                    {{"index is " + index + " value is " + item}}
                </li>
            </ng-container>
        </ul>
    `,
    styleUrls: ['./ng-container.component.less']
})
export class NgContainerComponent {

    list = ['1号位置', '2号位置', '3号位置', '4号位置', '5号位置', '6号位置', '7号位置', '8号位置', '9号位置'];
}
