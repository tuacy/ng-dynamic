import {AfterViewInit, Component, ContentChildren, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ContentChildComponent} from './child/content-child.component';

@Component({
    selector: 'app-ng-content',
    templateUrl: './ng-content.component.html',
    styleUrls: ['./ng-content.component.less']
})
export class NgContentComponent implements AfterViewInit {

    title_0 = 'child_0';
    title_1 = 'child_1';

    @ViewChild('section_child_0')
    child0: ContentChildComponent;
    @ViewChildren(ContentChildComponent)
    childrenList: QueryList<ContentChildComponent>;

    ngAfterViewInit(): void {
        console.log(this.child0);
        this.childrenList.forEach((item) => {
            console.log(item);
        });
    }

}
