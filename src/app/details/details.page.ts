import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DaaService } from '../data.service';
import { recipe } from '../home/model/recipe';
import {ingredient} from '../home/model/Ingredient'
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id ;
  recipe : recipe;
  ingredients : any;
  steps : any;
  constructor(private route : ActivatedRoute,private service : DaaService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDataById();
  }
  getDataById(){
    this.service.getData().subscribe((data : any) => {
      this.recipe = data.recipe.filter(x=>x.id==this.id)
      this.recipe = this.recipe[0];
      console.log(this.recipe);
      this.ingredients = this.recipe.ingredient
      this.steps = this.recipe.step;
    })
  }



}
