////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
////////Component imports
import { PmdsCdkTabComponent } from './components/tab/pmds-cdk-tab.component';
import { PmdsCdkTabsComponent } from './pmds-cdk-tabs.component';

describe('PmdsCdkTabsComponent', () => {
    let component: PmdsCdkTabsComponent;
    let fixture: ComponentFixture<PmdsCdkTabsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PmdsCdkTabsComponent,
                PmdsCdkTabComponent,
                RouterTestingModule
            ],
            providers: [
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should select tab', () => {
        const test = jest.spyOn(component['router'], 'navigate').mockImplementation(() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return { } as any
        });
        const tab = new PmdsCdkTabComponent();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component.activeTab = { ...tab, isActive: true } as any;
        component.selectTab(tab);
        expect(test).toHaveBeenCalled();
    });

    it('should not select tab', () => {
        const tab = new PmdsCdkTabComponent();
        component.activeTab = tab;
        component.selectTab(tab);
        expect(component.activeTab).toBeTruthy();
    });
});
