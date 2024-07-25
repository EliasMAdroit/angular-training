import { Component, Inject, OnInit  } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-meal-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './meal-product.component.html',
  styleUrl: './meal-product.component.css'
})
export class MealProductComponent  {

  actualProduct: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private crud: CrudService,
    public dialogRef: MatDialogRef<MealProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.actualProduct = this.fb.group({
      id: ['',Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]] 
    });
    // console.log('Datos recibidos:', data);
    this.getProduct(data);
  }
  
  updateProduct(){
    const prod = this.actualProduct.value;
    this.crud.update(prod).subscribe(data => {
      if(data.id){
        alert("Product Updatd Correctly!")
      }
    })
  }

  eraseProduct(){
    const prod = this.actualProduct.value;
    this.crud.delete(prod.id).subscribe(data => {
      if(data.count){
        alert("Product Erased Correctly!")
      }
    })
  }

  getProduct(id:string) {
    this.crud.getForId(id).subscribe(data => {
      console.log(data)
      // Asignar los valores a los controles del formulario
      this.actualProduct.patchValue({
        id: data.id,
        name: data.name,
        description: data.description,
        price: data.price
      });
    });
  }
  

}


