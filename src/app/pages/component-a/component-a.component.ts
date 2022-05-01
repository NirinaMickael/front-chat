import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { text } from 'body-parser';
import { debounceTime, filter, fromEvent, map, Observable, switchMap } from 'rxjs';
import { ObsService } from 'src/app/core/service/obs.service';
/*
  debounceTime(time : ms)
   à chaque fois qu'une nouvelle valeure est tombée
   en attent x ms ces valeur si pendant x ms il n'y a pas une
   nouvelle valeur en le laisse ces valeur que l"on garde 
*/
@Component({
  selector: 'app-search',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit , AfterViewInit {
  value : string = "";
  @ViewChild ('textInput' , {static : true}) input !: ElementRef;
  resultat : any;
  constructor(private _obs : ObsService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement,'input').pipe(
      map(toAnyValue => toAnyValue as any),
      map(tovalue => tovalue.target?.value),
      filter(text=>text != ""),
      debounceTime(300),
      switchMap(params=>this._obs.GetUser(params)),
      map(res=>res["data"])
    ).subscribe(el=>this.resultat = el[0]["mail"])
  }
  onChange(event : any) : void {
    this.value = event.target?.value;
  }
}
