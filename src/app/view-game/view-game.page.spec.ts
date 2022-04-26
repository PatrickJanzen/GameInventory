import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewGamePageRoutingModule } from './view-game-routing.module';

import { ViewGamePage } from './view-game.page';

describe('ViewGamePage', () => {
  let component: ViewGamePage;
  let fixture: ComponentFixture<ViewGamePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGamePage ],
      imports: [IonicModule.forRoot(), ViewGamePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
