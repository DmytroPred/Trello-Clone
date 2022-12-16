import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from "@angular/core/testing";
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { USER } from 'src/app/shared/mocks/test.user-data';
import { environment } from 'src/environments/environment';
import { ProfileModule } from '../../profile.module';
import { AboutComponent } from "./about.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProfileModule, RouterTestingModule],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AboutComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;
      el = fixture.debugElement;

    });
  })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display user data', fakeAsync(() => {
    component.user = of(USER);
    fixture.detectChanges();

    flush();
    let userCard = el.query(By.css('.card')),
        userInfo = userCard.query(By.css('.user-info')),
        infoArr = userInfo.queryAll(By.css('p'));

    expect(infoArr[0].nativeElement.textContent).toEqual(USER.username);
    expect(infoArr[1].nativeElement.textContent).toEqual(USER.email);
  }));
})