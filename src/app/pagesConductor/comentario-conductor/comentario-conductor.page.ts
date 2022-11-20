import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-comentario-conductor',
  templateUrl: './comentario-conductor.page.html',
  styleUrls: ['./comentario-conductor.page.scss'],
})
export class ComentarioConductorPage implements OnInit {
  listaComen: any = [
    {
      texto: ''
    }
  ]

  texto="";

  constructor(private activedRouter: ActivatedRoute,private conexionBD: DbservicioService, private router: Router) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.texto = this.router.getCurrentNavigation().extras.state.textoEnviado;
      }
    })
   }

  ngOnInit() {
    //me subscribo al servicio
    this.conexionBD.dbState().subscribe((res)=>{
      if(res){
        //subscribo a los cambios en las consultas de BD
        this.conexionBD.fetchComen().subscribe(item=>{
          this.listaComen = item;
        })
      }
    })
  }



}
