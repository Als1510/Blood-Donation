import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.alertService.presentToast("Registered Successfully!", 'success')
    this.router.navigateByUrl('/login', {replaceUrl:true})
  }

}
