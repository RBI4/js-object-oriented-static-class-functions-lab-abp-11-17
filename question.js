'use strict';

class Question{
    static All(){
      return this._All
  }

  static Find(Id){
    return.this.All()[id-1]
    }

constructor(content){
  this.content = content
  this.save()
}

  save(){
    this.constructor._All.find(this)
  }
}

Question._All = []
