import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  param: String;
  content;
  editmenu;
  menu_text;
  menu_href;
  constructor(
    private route:  ActivatedRoute,
    private hs: HeaderService,
    private gs: GlobalService
  ) {
    this.checkPrame();
  }

  ngOnInit() {
    if ( this.param === 'menu' ) {
      this.gs.allMenu().subscribe( menus => {
        this.content = menus;
      });
    }
  }

  editMenu(id) {
    this.gs.getById(id).subscribe( menu => {
      this.editmenu = menu['content'];
    });
  }

  addMenu(e) {
    const newMenu = {text: this.menu_text, href: this.menu_href};
    this.editmenu.push(newMenu);
    e.preventDefault();
  }


  checkPrame() {
    this.param = this.route.snapshot.paramMap.get('page');
  }

}
