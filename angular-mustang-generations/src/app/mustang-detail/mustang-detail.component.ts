import { Component, OnInit, Input } from '@angular/core';
import { Mustang } from '../mustang';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MustangService } from '../mustang.service';

@Component({
  selector: 'app-mustang-detail',
  templateUrl: './mustang-detail.component.html',
  styleUrls: ['./mustang-detail.component.css']
})
export class MustangDetailComponent implements OnInit {

  @Input() mustang?: Mustang;

  
  constructor(
    private route: ActivatedRoute,
    private mustangService: MustangService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getMustang();
  }

  getMustang(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mustangService.getMustang(id)
    .subscribe(mustang => this.mustang = mustang);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.mustang) {
      this.mustangService.updateMustang(this.mustang)
        .subscribe(() => this.goBack());
    }
  }

}
