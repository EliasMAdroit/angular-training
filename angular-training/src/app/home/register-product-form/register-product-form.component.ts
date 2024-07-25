import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-product-form.component.html',
  styleUrl: './register-product-form.component.css'
})
export class RegisterProductFormComponent {

  productForm:FormGroup;

  constructor(private crud: CrudService,private fb:FormBuilder)
  {
    this.productForm= this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: [null,[Validators.required,Validators.min(1)]]
    })
  }

  addProduct(){
    const prod = this.productForm.value;
    this.crud.insert(prod).subscribe(data => {
      if(data.id){
        alert("Product added correctly!")
      }
    });
  }

}
