import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RepositoriosService } from 'src/app/services/repositorios.service';
import { Owner } from 'src/app/model/Owner';
import { Repository } from 'src/app/model/repository';
import { filter, switchMap, debounceTime, catchError,  } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpErrorResponse } from "@angular/common/http";
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
  console.log(texto);
try {
  this.servicioRepo.getOwner(texto).subscribe((resp) => {
      this.owner.emit(resp);
      this.eroor.emit(false);
      },(err: HttpErrorResponse) => {
        this.eroor.emit(true);
        if (err.error instanceof Error) {
          
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      });

this.servicioRepo.getRepositorio(texto).subscribe((resp) => {
      this.repositories.emit(resp);
      this.eroor.emit(false);
      },(err: HttpErrorResponse) => {
        this.eroor.emit(true);
        if (err.error instanceof Error) {
         
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      });
    /*
        this.findControl.valueChanges
  .pipe(filter(value => value.length > 3),
  debounceTime(1000),
  switchMap(value =>
    this.servicioRepo.getRepositorio(value).pipe(
      catchError(() => {
        this.owner = null;
        this.eroor = true;
        return EMPTY;
      })
    ))
  ).subscribe((resp) => {
    this.repositories = resp;
    console.log(this.repositories);
    });
    */
// this.textoescrito.emit(texto);
} catch (error) {
  console.log("Entra en error");

}
  
}


  ngOnInit() {

  }



}
