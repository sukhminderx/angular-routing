import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child10',
  templateUrl: './child10.component.html',
  styleUrls: ['./child10.component.scss'],
})
export class Child10Component {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((map) => {
      console.log(map);
    });
    this.route.paramMap.subscribe((map) => {
      console.log(map);
    });
  }
}
