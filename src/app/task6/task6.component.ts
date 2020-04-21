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

  /**
   * @name addMessage
   * @desc adds the message
   * @param index {Number} Message index
  */
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

  /**
   * @name editMessage
   * @desc edits the message
   * @param cindex {Number} Conversation index
   * @param mindex {Number} Message index
  */
  editMessage(cindex, mindex) {
    this.converstations[cindex].messages[mindex].edit = true;
    this.converstations[cindex].messages[mindex].editMsg = this.converstations[cindex].messages[mindex].msg;
  }

  /**
   * @name saveEditMessage
   * @desc saves the edited message
   * @param cindex {Number} Conversation index
   * @param mindex {Number} Message index
  */
  saveEditMessage(cindex, mindex) {
    this.converstations[cindex].messages[mindex].edit = false;
    this.converstations[cindex].messages[mindex].msg = this.converstations[cindex].messages[mindex].editMsg;
    this.converstations[cindex].messages[mindex].editMsg = '';
  }

  /**
   * @name cancelEditMessage
   * @desc discard the edited message
   * @param cindex {Number} Conversation index
   * @param mindex {Number} Message index
  */
  cancelEditMessage(cindex, mindex) {
    this.converstations[cindex].messages[mindex].edit = false;
    this.converstations[cindex].messages[mindex].editMsg = '';
  }

  /**
   * @name deleteMessage
   * @desc deletes the message
   * @param cindex {Number} Conversation index
   * @param mindex {Number} Message index
  */
  deleteMessage(cindex, mindex) {
    this.converstations[cindex].messages.splice(mindex, 1)
  }

  /**
   * @name addConv
   * @desc add the conversation
  */
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

  /**
   * @name editConv
   * @desc edits the converstion
   * @param cindex {Number} Conversation index
  */
  editConv(cindex) {
    this.converstations[cindex].edit = true;
    this.converstations[cindex].editTitle = this.converstations[cindex].title;
  }

  /**
   * @name saveEditConv
   * @desc saves the edited the converstion
   * @param cindex {Number} Conversation index
  */
  saveEditConv(cindex) {
    this.converstations[cindex].edit = false;
    this.converstations[cindex].title = this.converstations[cindex].editTitle;
    this.converstations[cindex].editTitle = '';
  }

  /**
   * @name saveEditConv
   * @desc discarded the edited the converstion
   * @param cindex {Number} Conversation index
  */
  cancelEditConv(cindex) {
    this.converstations[cindex].edit = false;
    this.converstations[cindex].editTitle = '';
  }

  /**
   * @name deleteConv
   * @desc deletes the edited the converstion
   * @param cindex {Number} Conversation index
  */
  deleteConv(cindex) {
    this.converstations.splice(cindex, 1)
  }

}
