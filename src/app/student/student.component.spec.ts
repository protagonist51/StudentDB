import { async, ComponentFixture, TestBed,} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create Student component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the list of students in a table', () => {

    let trs = fixture.nativeElement.querySelectorAll('tr');
    expect(trs).toBeTruthy();
    expect(trs.length).toBe(4);
  });
});
