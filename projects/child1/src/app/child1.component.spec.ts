import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Child1Component } from './child1.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Child1Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Child1Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'child1'`, () => {
    const fixture = TestBed.createComponent(Child1Component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('child1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Child1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('child1 app is running!');
  });
});
