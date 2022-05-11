import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap } from 'rxjs';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,AfterViewInit {
  value : String = "";
  @ViewChild("textInput",{static:true}) input !: ElementRef;
  users = [{username :"nirina"}];
  constructor(private _user : UserService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement,'input').pipe(
      map(toAnyValue => toAnyValue as any),
      map(tovalue => tovalue.target?.value),
      filter(text=>text != ""),
      debounceTime(100),
      distinctUntilChanged(),
      switchMap(params=>this._user.searchUser(params)),
      map(res=>res["data"])
    ).subscribe(res=>console.log(res));
  }
  onChange(event : any) : void {
    this.value = event.target?.value;
  }
}
