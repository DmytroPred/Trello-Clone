import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/current-user/current-user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public currentUserService: CurrentUserService) { }

  ngOnInit(): void {
  }

}
