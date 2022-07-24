import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  donarsData = [
    { 'District': 'chamoli', 'Donar_Name': 'Mr. Ajay', 'Age': 22, 'Blood_Group': 'A-', 'MobileNo': 1234567890, 'Regular_Casual': 'Regular' },
    { 'District': 'chamoli', 'Donar Name': 'Mr. Pawan', 'Age': 28, 'Blood_Group': 'AB-', 'MobileNo': 1234567890, 'Regular_Casual': 'Casual' },
    { 'District': 'uttarkashi', 'Donar Name': 'Mr. Ajay', 'Age': 22, 'Blood_Group': 'B-', 'MobileNo': 1234567890, 'Regular_Casual': 'Regular' },
    { 'District': 'uttarkashi', 'Donar Name': 'Mr. Pawan', 'Age': 28, 'Blood_Group': 'O-', 'MobileNo': 1234567890, 'Regular_Casual': 'Casual' },
    { 'District': 'almoda', 'Donar Name': 'Mr. Ajay', 'Age': 22, 'Blood_Group': 'A-', 'MobileNo': 1234567890, 'Regular_Casual': 'Regular' },
    { 'District': 'almoda', 'Donar Name': 'Mr. Pawan', 'Age': 28, 'Blood_Group': 'B-', 'MobileNo': 1234567890, 'Regular_Casual': 'Casual' },
    { 'District': 'bageshwar', 'Donar Name': 'Mr. Ajay', 'Age': 22, 'Blood_Group': 'AB-', 'MobileNo': 1234567890, 'Regular_Casual': 'Regular' },
    { 'District': 'bageshwar', 'Donar Name': 'Mr. Pawan', 'Age': 28, 'Blood_Group': 'A-', 'MobileNo': 1234567890, 'Regular_Casual': 'Casual' },
    { 'District': 'pithoragarh', 'Donar Name': 'Mr. Ajay', 'Age': 22, 'Blood_Group': 'A-', 'MobileNo': 1234567890, 'Regular_Casual': 'Regular' },
    { 'District': 'pithoragarh', 'Donar Name': 'Mr. Pawan', 'Age': 28, 'Blood_Group': 'A-', 'MobileNo': 1234567890, 'Regular_Casual': 'Casual' },
    { 'District': 'champawat', 'Donar Name': 'Mr. Ajay', 'Age': 22, 'Blood_Group': 'A-', 'MobileNo': 1234567890, 'Regular_Casual': 'Regular' },
    { 'District': 'champawat', 'Donar Name': 'Mr. Pawan', 'Age': 28, 'Blood_Group': 'O-', 'MobileNo': 1234567890, 'Regular_Casual': 'Casual' },
    { 'District': 'haridwar', 'Donar Name': 'Mr. Ajay', 'Age': 22, 'Blood_Group': 'A-', 'MobileNo': 1234567890, 'Regular_Casual': 'Regular' },
    { 'District': 'haridwar', 'Donar Name': 'Mr. Pawan', 'Age': 28, 'Blood_Group': 'B-', 'MobileNo': 1234567890, 'Regular_Casual': 'Casual' },
  ]

  bloodGroup = 'all'
  district ='all'
  donars = new Array()

  constructor() { }

  ngOnInit(): void {
    this.change()
  }

  bloodGroupChange(data) {
    this.bloodGroup = data
    this.change()
  }
  
  districtChange(data) {
    this.district = data
    this.change()
  }
  
  change() {
    this.donars = new Array()
    if(this.bloodGroup=='all' && this.district=='all') {
      this.donars = this.donarsData
    } else if(this.bloodGroup == 'all') {
      this.donarsData.forEach(donar => {
        if(donar['District'] == this.district){
          this.donars.push(donar)
        }
      })
    } else if(this.district == 'all'){
      this.donarsData.forEach(donar => {
        if(donar['Blood_Group'] == this.bloodGroup){
          this.donars.push(donar)
        }
      })
    }
  }
}
