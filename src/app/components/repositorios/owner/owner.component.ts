import { Component, OnInit, Input } from '@angular/core';
import { RepositoriosService } from 'src/app/services/repositorios.service';
import { Owner } from 'src/app/model/Owner';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  @Input()
  owner: Owner;


  constructor(private servicioRepo: RepositoriosService) {

   }

  ngOnInit() {
    // this.owner = new Owner();
  }

}
