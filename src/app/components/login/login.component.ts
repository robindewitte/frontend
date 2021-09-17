import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDTO } from 'src/app/helpers/dto/loginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variables
  model: any = {};
  ErrorMessage = "";
  loading = false;
  returnUrl: string;
  userLoggedIn: string;
  userLoggedInId: any;

  constructor(    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  login() {
    let dto = new LoginDTO();
    dto.setUsername(this.model.username);
    dto.setPassword(this.model.password);
    this.authenticationService.login(dto)
      .subscribe(
        data => {
          if(data != "Verkeerd"){
            this.setStorageData(data);
          }else{
            this.ErrorMessage = "Something went wrong! Did you enter the correct credentials?";
          }   
        },
        error => {
          this.ErrorMessage = "Something went wrong! Did you enter the correct credentials?";
          this.loading = false;
        });
  }
  ToRegister(){
    this.router.navigateByUrl("registration");
  }

  setStorageData(data: any){
    localStorage.setItem('token', data);
    localStorage.setItem('username', this.model.username);
    this.router.navigateByUrl('/dashboard');
  }

}
