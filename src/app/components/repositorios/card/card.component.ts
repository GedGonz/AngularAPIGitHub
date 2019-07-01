import { Component, OnInit } from '@angular/core';
import { RepositoriosService } from 'src/app/services/repositorios.service';
import { Owner } from 'src/app/model/Owner';
import { Repository } from 'src/app/model/repository';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  repositories: Repository[];

  constructor(private servicioRepo: RepositoriosService) {
  

    servicioRepo.getRepositorio()
    .subscribe((resp: Repository[])=>{

      this.repositories = resp ;
    });

  console.log(this.repositories);
  
  }

  ngOnInit() {
  }

}
