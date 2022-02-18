import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, TemplateRef } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],

})
export class FloorComponent implements OnInit {

  modalRef: NgbModal;

  constructor(@Inject(NgbModal)
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>){
       this.modalRef = this.modalService.show(template, {backdrop:'static'});
  }

}
