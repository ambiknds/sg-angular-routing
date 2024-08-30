import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  params=""
  constructor(private activatedRouted:ActivatedRoute){
    console.log(this.activatedRouted.snapshot.params["id"])
    this.params=this.activatedRouted.snapshot.params["id"]
  }
}
