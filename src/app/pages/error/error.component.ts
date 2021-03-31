import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/clases/contact';
import { DataService } from 'src/app/servicios/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  providers: [DataService]
})
export class ErrorComponent implements OnInit {
  
  contactForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;


  constructor(private fb: FormBuilder, private dataSvc: DataService ) { }
  
  
  ngOnInit(): void {
    this.iniForm();
  }


  async onSave():Promise <void>{
    if(this.contactForm?.valid){
      
      
      try{
        const formValue = this.contactForm.value;
        await this.dataSvc.onSaveContact(formValue);
        //todo ok
        Swal.fire('Mensaje Enviado', 'Todo subio correctamente!!','success');
        this.contactForm.reset();
      }catch(e){
        alert(e);
      }
   
    }else{
      console.log('Nos es Valido');
      Swal.fire('Algo Salio Mal!','Revisa el contenido del formulario','error');    }
  }

  isValidField(field: string): string {   
   const validatedField = this.contactForm.get(field);
  
    return (!validatedField?.valid  &&  validatedField?.touched  )
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  } 
  error(validatedField: import("@angular/forms").AbstractControl | null) {
    throw new Error('Method not implemented.');
  }


 
  private iniForm():void{
    this.contactForm = this.fb.group({
      name:['',[Validators.required]],
      lastName:[''],
      email:['',[Validators.required, Validators.pattern(this.isEmail)]],
      message:['',[Validators.required,Validators.minLength(10),Validators.maxLength(200)]],
    })
  }
  

}
