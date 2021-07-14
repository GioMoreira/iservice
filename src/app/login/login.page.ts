import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email='';
  senha='';
  logado='';

  private api = 'http://localhost/api/';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['tab1']);
  };

  registrar(){
    this.router.navigate(['registrar']);
  };

  redefinir(){
    this.router.navigate(['redefine']);
  };

  logar(){
    this.http.get<any[]>(this.api+'logar.php?email='+this.email+'&senha='+this.senha)
        .subscribe( dados => {
          if(dados.length > 0){
            this.logado=dados[0].nome;
          }
          console.log(dados);
          });
        }

  }

