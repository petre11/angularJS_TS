import { ComponentFixture, TestBed } from 'angularjs-testbed';
import { MessageService } from '../message.service';
import { AgendaCard } from './agenda-card.directive';

describe('TopBarComponent', () => {
  let component: AgendaCard;
  let fixture: ComponentFixture<AgendaCard>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaCard ],
      providers: [ MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
