import { Component, OnInit, Input } from '@angular/core';
import { CATALOGUE } from '../../../shared/mock-data/catalogue-produits';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  @Input() pr: any;
  title = 'Products';
  produits: Produit[] = CATALOGUE;
  selectedProduit!: Produit | null;

  ngOnInit(): void {}

  onDetail(produit: Produit): void {
    alert(produit.description);
  }

  onSelect(produit: Produit): void {
    this.selectedProduit = produit;
  }

  onClose(): void {
    this.selectedProduit = null;
  }
}