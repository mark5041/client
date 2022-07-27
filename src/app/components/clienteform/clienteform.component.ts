import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

function nomeValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^[a-zA-Z0-9._-]{2,}$")) {
    return { invalidNome : true }
  } else {
    return { invalidNome : false }
  }
}

function cognomeValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^[a-zA-Z0-9._-]{2,}$")) {
    return { invalidCognome : true }
  } else {
    return { invalidCognome : false }
  }
}

function userValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^[a-zA-Z0-9._-]{2,}$")) {
    return { invalidUser : true }
  } else {
    return { invalidUser : false }
  }
}

function passValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^[a-zA-Z0-9._-]{2,}$")) {
    return { invalidPass : true }
  } else {
    return { invalidPass : false }
  }
}

function emailValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")) {
    return { invalidEmail : true }
  } else {
    
    return { invalidEmail : false }
  }
}

@Component({
  selector: 'app-clienteform',
  templateUrl: './clienteform.component.html',
  styleUrls: ['./clienteform.component.css']
})
export class ClienteformComponent implements OnInit {

  cliente!: Cliente;
  clientForm!: FormGroup;
  id: FormControl;
  nome: FormControl;
  cognome: FormControl;
  username: FormControl;
  password: FormControl;
  email: FormControl;
  try: boolean = false;

  constructor(private _clienteService: ClienteService, private _router: Router, fb: FormBuilder) {
    this.clientForm = fb.group({
    'id' : [],
    'nome' : ['', Validators.compose([Validators.required, nomeValidator])],
    'cognome' : ['', Validators.compose([Validators.required, cognomeValidator])],  
    'username' : ['', Validators.compose([Validators.required, userValidator])],
    'password' : ['', Validators.compose([Validators.required, passValidator])],  
    'email' : ['', Validators.compose([Validators.required, emailValidator])],
    });

    this.id = this.clientForm.controls['id'] as FormControl;
    this.nome = this.clientForm.controls['nome'] as FormControl;
    this.cognome = this.clientForm.controls['cognome'] as FormControl;
    this.username = this.clientForm.controls['username'] as FormControl;
    this.password = this.clientForm.controls['password'] as FormControl;
    this.email = this.clientForm.controls['email'] as FormControl;
  }

  ngOnInit(): void {
    this.cliente = this._clienteService.getter();
  }

  processoForm() {
    if (this.cliente.id == null) {
      this._clienteService.createCliente(this.cliente).subscribe((c) => {
        console.log(c);
        this.try = true;
        if (c) {
          this.try = false;
          this._router.navigate(['/']);
        }
      });
    } else {
      this._clienteService.updateCliente(this.cliente).subscribe((c) => {
        console.log(c);
        if (c) {
          this.try = false;
          this._router.navigate(['/']);
        }
          
      });
    }
  }

}
