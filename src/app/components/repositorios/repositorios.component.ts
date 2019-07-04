import { Component, OnInit, Input } from '@angular/core';
import { Owner } from 'src/app/model/Owner';
import { Repository } from 'src/app/model/Repository';
@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.css']
})
export class RepositoriosComponent implements OnInit {

@Input()
Ownerrecibido: Owner;
@Input()
@Input()
eroorrecibido: boolean;
Repositoryrecibido: Repository;
  constructor() {

   } 
  ngOnInit() {
  }

}
