import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.alertService.presentToast("Logged in Successfully!", 'success')
    this.router.navigateByUrl('/home', {replaceUrl:true})
  }

}
