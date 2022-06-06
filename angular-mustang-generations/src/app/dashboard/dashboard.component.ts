import { Component, OnInit } from '@angular/core';
import { Mustang } from '../mustang';
import { MustangService } from '../mustang.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  mustangs: Mustang[] = [];

  constructor(private mustangService: MustangService) { }

  ngOnInit(): void {
    this.getMustangs();
  }

  getMustangs(): void {
    this.mustangService.getMustangs()
      .subscribe(mustangs => this.mustangs = mustangs.slice(0, 5));
  }
}
