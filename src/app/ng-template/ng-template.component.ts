import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-ng-template',
    templateUrl: './ng-template.component.html',
    styleUrls: ['./ng-template.component.less']
})
export class NgTemplateComponent implements AfterViewInit {

    condition = true;

    @ViewChild('tpl')
    tplRef: TemplateRef<any>;

    myContext = {$implicit: '默认值', name: 'tuacy'};

    constructor(private vcRef: ViewContainerRef) {
    }

    ngAfterViewInit(): void {
        this.vcRef.createEmbeddedView(this.tplRef);
    }

}
