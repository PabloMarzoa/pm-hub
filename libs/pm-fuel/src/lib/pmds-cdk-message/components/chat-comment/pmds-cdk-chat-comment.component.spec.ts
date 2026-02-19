////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkChatCommentComponent } from './pmds-cdk-chat-comment.component';

describe('PmdsCdkChatCommentComponent', () => {
    let component: PmdsCdkChatCommentComponent;
    let fixture: ComponentFixture<PmdsCdkChatCommentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkChatCommentComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkChatCommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});