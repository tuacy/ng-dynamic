import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-content-child',
    template: `
        <p>
            {{title}}
        </p>
    `,
    styleUrls: ['./content-child.component.less']
})
export class ContentChildComponent {

    @Input()
    title = '';

}
