import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioTokenViewModel } from '../auth/view-models/token.view-model';
import { UsuarioService } from '../core/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  public estaColapsada: boolean = false;

  public usuarioLogado$: Observable<UsuarioTokenViewModel | null>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioLogado$ = this.usuarioService.usuarioLogado;
  }

}
