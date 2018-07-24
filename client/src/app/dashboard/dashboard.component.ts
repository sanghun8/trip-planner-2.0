import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  userId:any;

  constructor(
    private tripService:TripService,
    private router:Router
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.tripService.getUser(this.userId).subscribe(user=>{
      console.log(user);
      this.user = user
    });
  }
}