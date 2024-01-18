import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignInFormModel } from './sign-in.model';
import { PATH } from '../../models/routes.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'blr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  public formGroup = this.formBuilder.group<SignInFormModel>({
    email: null,
    password: null,
  });

  public loadingSg = signal<boolean>(false);

  public readonly FORGOT_PASSWORD_LINK = `/${PATH.root.auth}/${PATH.auth.forgotPassword}`;
  public readonly SIGNUP_LINK = `/${PATH.root.auth}/${PATH.auth.signUp}`;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup.controls.email.setValidators([
      Validators.required,
      Validators.email,
    ]);
    this.formGroup.controls.password.setValidators([Validators.required]);
  }

  submit() {
    const value: SignInFormModel = this.formGroup.getRawValue();

    if (this.formGroup.invalid) {
      this.formGroup.setErrors({ formError: 'E-mail or password is wrong.' });
      return;
    }
    this.authService.login(value.email, value.password);
  }
}
