import { Component } from '@angular/core';
import { recipe } from './model/recipe';
import { DaaService } from './../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  List : recipe[];
  val :  string;
  constructor(private service : DaaService,private router:Router) {
  }
  ngOnInit(): void {
   this.getData();
  }

  getData(){
    this.service.getData().subscribe((data : any) => {
      this.List = data.recipe;
    })
  }

  goToDetails(id){
    this.router.navigate(['/details/'+id]);
  }



}
