import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DaaService } from '../data.service';
import { recipe } from '../home/model/recipe';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id ;
  recipe : recipe;
  ingredients : string[]
  constructor(private route : ActivatedRoute,private service : DaaService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDataById();
  }

  getDataById(){
    this.service.getData().subscribe((data : any) => {
      this.recipe = data.recipe.filter(x=>x.id==this.id)
      console.log(this.recipe)
      this.ingredients =data.recipe.ingredient.name
      
    })
  }



}
