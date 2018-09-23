import {Component, Input, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-template-input',
    template: `
        <!-- 没有传递参数的时候就使用defaultTemplate里面的布局 -->
        <ng-template #defaultTemplate>
            <div>咱们没有传递参数</div>
        </ng-template>
        <ng-container *ngTemplateOutlet="inputTemplate ? inputTemplate: defaultTemplate"></ng-container>

    `,
    styleUrls: ['./template-input.component.less']
})
export class TemplateInputComponent {

    /**
     * 模板作为参数
     */
    @Input()
    inputTemplate: TemplateRef<any>;


}
