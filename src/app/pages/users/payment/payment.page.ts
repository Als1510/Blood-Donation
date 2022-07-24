import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.alertService.presentToast("Transaction Successfull", 'success')
    this.router.navigateByUrl('/home', {replaceUrl:true})
  }

}
