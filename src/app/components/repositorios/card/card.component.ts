import { Component, OnInit, Input } from '@angular/core';
import { RepositoriosService } from 'src/app/services/repositorios.service';
import { Owner } from 'src/app/model/Owner';
import { Repository } from 'src/app/model/repository';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  repositories: Repository[];


  constructor(private servicioRepo: RepositoriosService) {
  }


  ngOnInit() {
  }

}
