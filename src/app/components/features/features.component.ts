import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ModuleApp, Modules } from '../../models/content-page';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  constructor(private contentService:ContentService){}

  feature: ModuleApp | undefined; 

  ngOnInit(): void{
    this.contentService.getContentPage().subscribe(content =>{
      this.feature = content.modules.filter(e => e.name == Modules.Features)[0];
    });
  }

}
