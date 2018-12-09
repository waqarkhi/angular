import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin;
  menu;
  constructor(
    private hs: HeaderService,
    private gs: GlobalService
  ) {}

  ngOnInit() {
    this.isAdmin = window.location.href.includes('admin');
    if ( this.isAdmin === false) {
        this.hs.getMenu().subscribe( data => {
          const menuId = data['content'][0].menu_id;
          this.gs.getById(menuId).subscribe( menu => {
            this.menu = menu['content'];
          });
        });
    }
  }

}
