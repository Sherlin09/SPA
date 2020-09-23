import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  constructor( private activateRoute: ActivatedRoute ) {

    this.activateRoute.params.subscribe( params => {
      console.log( params['id'] );
    } )
   }


}
