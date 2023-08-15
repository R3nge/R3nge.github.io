import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ElementRef, Component } from '@angular/core';
import { ResponsiveDirective } from './responsive.directive';

@Component({
  template: '<div responsive></div>',
})
class TestComponent {}

describe('ResponsiveDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let breakpointObserver: BreakpointObserver;
  let elementRef: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ResponsiveDirective],
      providers: [BreakpointObserver],
    });

    fixture = TestBed.createComponent(TestComponent);
    elementRef = fixture.debugElement.children[0].injector.get(ElementRef);
    breakpointObserver = TestBed.inject(BreakpointObserver);
  });

  it('should create an instance', () => {
    const directive = new ResponsiveDirective(elementRef, breakpointObserver);
    expect(directive).toBeTruthy();
  });

  // Add more test cases as needed to verify the behavior of your directive
});
