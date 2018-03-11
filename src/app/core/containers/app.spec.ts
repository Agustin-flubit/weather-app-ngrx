import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app';
import { HeaderComponent } from '../components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../routes';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [    RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
