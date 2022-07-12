import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteformComponent } from './clienteform.component';

describe('ClienteformComponent', () => {
  let component: ClienteformComponent;
  let fixture: ComponentFixture<ClienteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
