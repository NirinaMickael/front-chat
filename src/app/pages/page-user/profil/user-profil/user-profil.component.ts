import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
  name !:  string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['username'];    
  }

}
