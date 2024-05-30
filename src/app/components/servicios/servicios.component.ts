import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ModuleApp, Modules } from '../../models/content-page';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  
  constructor(private contentService: ContentService ){}

  servicios:ModuleApp | undefined

  ngOnInit(): void {
    
    this.contentService.getContentPage().subscribe(data => {
      this.servicios = data.modules.filter(m => m.name == Modules.Servicios)[0];

    })

  }

}
