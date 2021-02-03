import { Component, OnInit, } from '@angular/core';
import { trigger, transition, style, query, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  animations: [
    trigger('enterLeave', [
      transition( ':enter', [
        query('.menu__item', [
          style({opacity: 0, transform: 'translateY(-30px)'}),
          stagger(200, 
            animate('0.4s', style({opacity: 1, transform: 'translateY(0)'})))
        ])
      ]),
      transition( ':leave', [
        query('.menu__item', [
          style({opacity: 1, transform: 'translateY(0)'}),
          stagger(150, 
            animate('0.3s', style({opacity: 0, transform: 'translateY(-30px)'})))
        ])
      ])
    ])
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class SidebarComponent implements OnInit {

    
  ngOnInit(): void {
   // this.isOpen = true;
  }
  ngOnDestroy(): void{
//this.isOpen = false
  }
}