import { Component, OnInit } from '@angular/core';
import {CATALOGUE} from '../../../shared/mock-data/catalogue-produits' ;
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  onDetail(produit: Produit) {
    alert(produit.description);
  }
  title = "PRODUITS" ;
  produits = CATALOGUE ;

  ngOnInit(): void {}
  }
