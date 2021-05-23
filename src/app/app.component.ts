import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
    my_notes = [
      {id:1, title: 'nota 1', description: 'descripcion 1', estado: 'abierto'},
      {id:2, title: 'nota 2', description: 'descripcion 2', estado: 'abierto'},
      {id:3, title: 'nota 3', description: 'descripcion 3', estado: 'abierto'},
      {id:4, title: 'nota 4', description: 'descripcion 4', estado: 'abierto'}, 
    ];
    

  note= {id: null, title: null, description: null, estado: null}
  show_form = false;
  editing = false;

  addNote(){
    this.show_form = true;
  }
  view_Note(note){
    this.editing = true;
     this.note =  note;
    this.show_form = true;
 }
 cancelNote(){
  this.show_form = false;
  }
  deleteNote(){
    var me = this;
     this.my_notes.forEach(function(el, i){
       if( el == me.note){
        me.my_notes.splice(i, 1);
      }
    });
  this.show_form = false;
 this.note = {id: null, title: null, description: null, estado:null};
 }
 createNote(){
  if(this.editing){
    var me = this;
  this.my_notes.forEach(function(el, i){
    if (el.id == me.note.id){
  me.my_notes[i] = me.note;
  }
});
 me.show_form = false;
 }else{
this.note.id = Date.now();
this.my_notes.push(this.note);
this.show_form = false;
this.note = {id: null, title: null, description: null, estado: null};
 }
}

}
