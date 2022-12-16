import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { USER } from 'src/app/shared/mocks/test.user-data';
import { environment } from 'src/environments/environment';
import { ProfileModule } from '../../profile.module';
import { EditComponent } from './edit.component';

describe("EditComponent", () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProfileModule, NoopAnimationsModule, MatSnackBarModule, FormsModule],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(EditComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;
      el = fixture.debugElement;

    });
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display user data', () => {
    component.user = USER;
    component.profileForm.patchValue(component.user);
    fixture.detectChanges();

    const userCard = el.query(By.css('.user-info'));
    expect(userCard.nativeElement[0].value).toBe(component.profileForm.controls['username'].value);
    expect(userCard.nativeElement[1].value).toBe(component.profileForm.controls['email'].value);
    expect(userCard.nativeElement[2].value).toBe(component.profileForm.controls['password'].value);
    expect(userCard.nativeElement[0].value).toBe('testUser');
    expect(userCard.nativeElement[1].value).toBe('someemail@gmail.com');
    expect(userCard.nativeElement[2].value).toBe('testPassword');
  });

  it('should return falsy', () => {
    const userCard = el.query(By.css('.user-info'));

    fixture.detectChanges();

    expect(component.profileForm.controls['username'].value).toBeNull();
    expect(component.profileForm.controls['email'].value).toBeNull();
    expect(component.profileForm.controls['password'].value).toBeNull();
    expect(userCard.nativeElement[0].value).toBe('');
    expect(userCard.nativeElement[1].value).toBe('');
    expect(userCard.nativeElement[2].value).toBe('');
  });
})