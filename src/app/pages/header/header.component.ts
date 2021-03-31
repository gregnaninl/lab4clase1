import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
  public isLogged: boolean = false;
  public user : any;
  public user$ : Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc : AuthService,private router: Router) { }

  
  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['login']);
    } catch (error) {
      console.log(error);
    }
  }

  

}
