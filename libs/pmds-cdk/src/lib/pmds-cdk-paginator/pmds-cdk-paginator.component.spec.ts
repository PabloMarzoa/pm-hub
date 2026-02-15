////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
////////Component imports
import { PmdsCdkPaginatorComponent } from './pmds-cdk-paginator.component';

describe('PmdsCdkPaginatorComponent', () => {
    let component: PmdsCdkPaginatorComponent;
    let fixture: ComponentFixture<PmdsCdkPaginatorComponent>;
    const paginationInfoMock = {
        total: 30,
        itemsPage: 10,
        actualPage: 1
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkPaginatorComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkPaginatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('detects change page', () => {
        const spyCalculateLastPage = jest.spyOn(component, 'calculateLastPage');
        const spyChangeInitialNumberPage = jest.spyOn(component, 'changeInitialNumberPage');
        component.ngOnChanges({
            paginationInfo: new SimpleChange(true, true, false)
        })
        expect(spyCalculateLastPage).toBeCalled();
        expect(spyChangeInitialNumberPage).toBeCalled();
    });

    it('calculate last page', () => {
        component.paginationInfo = paginationInfoMock;
        component.calculateLastPage()
        expect(component.lastPage).toBe(3);
    });

    it('set initial number page', () => {
        component.lastPage = 4;
        component.changeInitialNumberPage();
        expect(component.numericalPage).toEqual([1, 2, 3, 4, 5])
    });

    it('change page return conditonal', () => {
        const spy = jest.spyOn(component.changePage, 'emit');
        component.paginationInfo.actualPage = 1;
        component.changePageEmit(1);
        expect(spy).not.toBeCalled();
        component.paginationInfo.actualPage = 3;
        component.lastPage = 3;
        component.changePageEmit(3, true);
        expect(spy).not.toBeCalled();
    });

    it('change page emit', () => {
        const spyChangePage = jest.spyOn(component.changePage, 'emit');
        component.paginationInfo = paginationInfoMock;
        component.changePageEmit(2, false);
        component.lastPage = 20;
        expect(component.numericalPage).toEqual([1, 2, 3, 4, 5]);
        expect(spyChangePage).toBeCalled();
    });

    it('jump to pages', () => {
        const spy = jest.spyOn(component, 'changePageEmit');
        component.jumpToPage(20);
        expect(spy).toBeCalled();
    });

    it('change items per page emit', () => {
        const spy = jest.spyOn(component.itemChangedPerPage, 'emit');
        component.changeItemPerPage(20);
        expect(spy).toBeCalled();
    });

    it('checks limits page', () => {
        component.paginationInfo = {
            total: 40,
            itemsPage: 10,
            actualPage: 1
        };
        component.lastPage = 4;
        component.changePageEmit(4);
        expect(component.numericalPage).toEqual([1, 2, 3, 4, 5]);
        component.paginationInfo.actualPage = 3;
        component.changePageEmit(1);
        expect(component.numericalPage).toEqual([1, 2, 3, 4, 5]);
    })
});
