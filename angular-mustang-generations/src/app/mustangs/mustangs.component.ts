import { Component, OnInit } from '@angular/core';
import { Mustang } from '../mustang';
import { MustangService } from '../mustang.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-mustangs',
  templateUrl: './mustangs.component.html',
  styleUrls: ['./mustangs.component.css']
})

export class MustangsComponent implements OnInit {
  mustangs: Mustang[] = [];

  constructor(private mustangService: MustangService) { }

  ngOnInit(): void {
    this.getMustangs();
  }
  
  getMustangs(): void {
    this.mustangService.getMustangs()
        .subscribe(mustangs => this.mustangs = mustangs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.mustangService.addMustang({ name } as Mustang)
      .subscribe(mustang => {
        this.mustangs.push(mustang);
      });
  }

  delete(mustang: Mustang): void {
    this.mustangs = this.mustangs.filter(m => m !== mustang);
    this.mustangService.deleteMustang(mustang.id).subscribe();
  }

}
