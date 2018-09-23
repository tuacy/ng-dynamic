import {AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList} from '@angular/core';
import {ContentChildComponent} from '../child/content-child.component';

/**
 * 想获取ng-content里面的组件的使用@ContentChild或者@ContentChildren
 */
@Component({
    selector: 'app-content-section',
    templateUrl: './content-section.component.html',
    styleUrls: ['./content-section.component.less']
})
export class ContentSectionComponent implements AfterContentInit {

    title = 'section_parent';

    @ContentChild('section_child_0')
    childOne: ContentChildComponent;
    @ContentChildren(ContentChildComponent)
    childrenList: QueryList<ContentChildComponent>;

    ngAfterContentInit(): void {
        console.log(this.childOne);
        this.childrenList.forEach((item) => {
            console.log(item);
        });
    }

}
