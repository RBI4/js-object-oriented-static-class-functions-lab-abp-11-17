'use strict';

class Question{
  constructor(){
    this.save()
  }

  save(){
    this.constructor._All.find(this)
  }

  static All(){
    return this._All;
  }
}

static FindByID(Id){
  return.this.All().find(function(question){
    return question.id === Id;
    })
  }
}

User._All = []