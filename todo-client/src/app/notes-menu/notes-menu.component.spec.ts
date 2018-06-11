import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesMenuComponent } from './notes-menu.component';

describe('NotesMenuComponent', () => {
  let component: NotesMenuComponent;
  let fixture: ComponentFixture<NotesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
