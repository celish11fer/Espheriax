import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { ModuleApp, Modules } from '../../models/content-page';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private contentService: ContentService){}
  
  about: ModuleApp | undefined; 

  ngOnInit(): void{
    this.contentService.getContentPage().subscribe(content =>{
      this.about = content.modules.filter(e => e.name == Modules.About)[0];
    });
  }

}
