import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
})
export class HeaderComponent implements OnInit {
  public isAuthorized$ = this.authService.isAuthorized$;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout(): void {
    this.authService.logout();
  }
}
