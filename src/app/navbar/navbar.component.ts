import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAddCharacter = false;
  username?: string;

  rutaActual: any;
  constructor(private tokenStorageService: TokenStorageService, private route: Router) {
    this.showAddCharacter = this.roles.includes('ROLE_ADMIN');
    this.rutaActual = "/add";
    route.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = event.url;
        console.log(this.rutaActual)

        if (this.isLoggedIn) {
          if (this.rutaActual === '/add' && !this.showAddCharacter) {
            this.route.navigate(['/home']);
            alert("Solo puedes añadir personajes siendo administrador.")
          }
        }
      }
    }
    )
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAddCharacter = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;

    } else if (!this.isLoggedIn) {
      this.route.navigate(['/login']);
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
