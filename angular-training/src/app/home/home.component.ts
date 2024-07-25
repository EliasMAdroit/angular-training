import { Component, OnInit } from '@angular/core';
import { MealProductComponent } from './meal-product/meal-product.component';
import { RegisterProductFormComponent } from './register-product-form/register-product-form.component';
import { MatDialog } from "@angular/material/dialog";
import { MealProd } from '../interfaces/meal-prod';
import { CrudService } from '../services/crud.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MealProductComponent,RegisterProductFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  dialogRef: MatDialog;
  products: MealProd[] = [];
  totalProds: number=0;
  totalButtons: Array<{ name: any }> = [];
  
  filter: string = "";
  skip: number = 0;
  pagination: number = 16;


  productData: MealProd =  
  {
    name:"",
    description:"",
    price: 0,
    id:""
  };

  constructor(
    private dialog: MatDialog,
    private crud: CrudService,
    private auth: AuthService,
    private router: Router
  ){
    this.dialogRef = dialog;
  }

  ngOnInit(): void {
    this.getProductsCount();
    this.getProducts();
  }

  addProductForm() {
    this.dialogRef.open(RegisterProductFormComponent,{

    });
  }
  
  editProductForm(id:string){
    this.dialogRef.open(MealProductComponent,{
      data: id
    })
  }

  getProductsCount(): void {
    this.crud.getCountProducts().subscribe(data => {
      this.totalProds = data.count;
      const totalPages = Math.ceil(this.totalProds / this.pagination);
      
      // Inicializar el arreglo de botones
      this.totalButtons = [];
      
      for (let i = 0; i < totalPages; i++) {
        this.totalButtons.push({ name: i + 1 });
      }
    });
  }
  
  getProducts(): void {
    this.filter='"limit":'+ this.pagination + ',"skip":' + this.skip ;
    console.log(this.filter);

    this.crud.get(this.filter).subscribe(
      (data: MealProd[]) => {
        this.products = data;
        // console.log(data);
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );  
  }

  updatePagination(buttonNumber:any){
    this.skip = (buttonNumber - 1) * this.pagination;
    this.getProducts();
  }

  logout(){
    this.auth.logout();
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
