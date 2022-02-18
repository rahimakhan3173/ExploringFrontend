import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(
    // private httpClient: HttpClient,
       private modalService: BsModalService
    ) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>){
      this.modalRef = this.modalService.show(template, {backdrop:'static'});
  }

}
