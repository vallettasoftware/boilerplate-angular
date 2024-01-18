import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpFormModel } from './sign-up.model';
import { PATH } from '../../models/routes.model';
import { AuthService } from '../auth.service';
import { mustMatch } from '../../helpers/password-validators';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  public formGroup = this.formBuilder.group<SignUpFormModel>(
    {
      email: null,
      password: null,
      passwordConfirmation: null,
    },
    { validators: mustMatch('password', 'passwordConfirmation') }
  );

  public loadingSg = signal<boolean>(false);

  public readonly SIGNIN_LINK = `/${PATH.root.auth}/${PATH.auth.signIn}`;

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
    if (this.formGroup.invalid) {
      return;
    }
    const value: SignUpFormModel = this.formGroup.getRawValue();
    this.loadingSg.set(true);
    this.authService.register(value.email, value.password);
  }
}
