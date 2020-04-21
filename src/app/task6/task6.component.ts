import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.scss']
})
export class Task6Component implements OnInit {

  converstations = [
    {
      id: +new Date(),
      newMessage: '',
      title: 'Converstation 1',
      editTitle: '',
      edit: false,
      messages: [
        {
          id: +new Date(),
          msg: 'Message 1',
          editMsg: '',
          edit: false,
        }
      ],
    },
    {
      id: +new Date(),
      newMessage: '',
      editTitle: '',
      edit: false,
      title: 'Converstation 2',
      messages: [
        {
          id: +new Date(),
          msg: 'Message 1',
          editMsg: '',
          edit: false,
        },
        {
          id: +new Date(),
          msg: 'Message 2',
          editMsg: '',
          edit: false,
        },
        {
          id: +new Date(),
          msg: 'Message 3',
          editMsg: '',
          edit: false,
        }
      ],
    },
  ]

  newConv = '';

  constructor() { }

  ngOnInit() {
  }

  addMessage(index) {
    if (this.converstations[index].newMessage !== '') {
      this.converstations[index].messages.push({ 
        id: +new Date(), 
        msg: this.converstations[index].newMessage, 
        editMsg: '', 
        edit: false });
      this.converstations[index].newMessage = '';
    }
  }

  editMessage(cindex, mindex) {
    this.converstations[cindex].messages[mindex].edit = true;
    this.converstations[cindex].messages[mindex].editMsg = this.converstations[cindex].messages[mindex].msg;
  }

  saveEditMessage(cindex, mindex) {
    this.converstations[cindex].messages[mindex].edit = false;
    this.converstations[cindex].messages[mindex].msg = this.converstations[cindex].messages[mindex].editMsg;
    this.converstations[cindex].messages[mindex].editMsg = '';
  }

  cancelEditMessage(cindex, mindex) {
    this.converstations[cindex].messages[mindex].edit = false;
    this.converstations[cindex].messages[mindex].editMsg = '';
  }

  deleteMessage(cindex, mindex) {
    this.converstations[cindex].messages.splice(mindex, 1)
  }

  addConv() {
    if (this.newConv !== '') {
      this.converstations.push({
        id: +new Date(),
        title: this.newConv,
        editTitle: '',
        edit: false,
        newMessage: '',
        messages: [
        ],
      })
      this.newConv = ''
    }
  }

  editConv(cindex) {
    this.converstations[cindex].edit = true;
    this.converstations[cindex].editTitle = this.converstations[cindex].title;
  }

  saveEditConv(cindex) {
    this.converstations[cindex].edit = false;
    this.converstations[cindex].title = this.converstations[cindex].editTitle;
    this.converstations[cindex].editTitle = '';
  }

  cancelEditConv(cindex) {
    this.converstations[cindex].edit = false;
    this.converstations[cindex].editTitle = '';
  }

  deleteConv(cindex) {
    this.converstations.splice(cindex, 1)
  }

}
