import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'padre';

  constructor (
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this._router.events.subscribe( event => { 
      // console.log( event );
    })
    
    // this._route
  }
}
