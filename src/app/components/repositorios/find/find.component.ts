import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RepositoriosService } from 'src/app/services/repositorios.service';
import { Owner } from 'src/app/model/Owner';
import { Repository } from 'src/app/model/repository';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private servicioRepo: RepositoriosService) { }

  findControl = new FormControl();
  @Output()
  eroor: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  owner: EventEmitter<Owner> = new EventEmitter<Owner>();
  @Output()
  repositories: EventEmitter<Repository[]> = new EventEmitter<Repository[]>();
// @Output() textoescrito: EventEmitter<string> = new EventEmitter<string>();

finRepository(texto) {
  this.servicioRepo.getOwner(texto).subscribe((resp) => {
      this.owner.emit(resp);
      this.eroor.emit(false);
      }, (err: HttpErrorResponse) => {
        this.eroor.emit(true);
      });

  this.servicioRepo.getRepositorio(texto).subscribe((resp) => {
      this.repositories.emit(resp);
      this.eroor.emit(false);
      }, (err: HttpErrorResponse) => {
        this.eroor.emit(true);
      });
}


  ngOnInit() {

  }



}
