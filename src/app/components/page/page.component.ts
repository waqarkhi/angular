import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  param: String;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('page');
  }
}
