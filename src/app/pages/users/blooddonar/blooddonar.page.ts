import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-blooddonar',
  templateUrl: './blooddonar.page.html',
  styleUrls: ['./blooddonar.page.scss'],
})
export class BlooddonarPage implements OnInit {

  constructor(
    private alertService: AlertService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.alertService.presentToast("Form submitted Successfully!", 'success')
    this.router.navigateByUrl('/home', {replaceUrl:true})
  }

}
