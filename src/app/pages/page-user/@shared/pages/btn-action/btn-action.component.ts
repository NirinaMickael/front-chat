import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.scss']
})
export class BtnActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('id'),sessionStorage.getItem('otherId'))
  }

}
