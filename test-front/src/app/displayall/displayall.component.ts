import { Component } from '@angular/core';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css'],
})
export class DisplayallComponent {
  ngOnInit() {
    this.api.displayAll().subscribe((result: any) => {
      // console.log(result);
      this.allData = result.data;
      console.log(this.allData);
    });
  }

  constructor(private api: ServicesService) {}

  allData: any;
}
