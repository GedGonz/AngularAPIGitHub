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
   /* this.servicioRepo.getOwner(this.texto)
    .subscribe((resp: Owner) => this.owner = {
    login: resp.login,
    name: resp.name,
    avatar_url: resp.avatar_url,
    location: resp.location,
    created_at: resp.created_at,
    updated_at: resp.updated_at
   });
    console.log(this.owner);
    */
   }

  ngOnInit() {
    // this.owner = new Owner();
  }

}
