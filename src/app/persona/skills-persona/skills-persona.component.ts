import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-persona',
  templateUrl: './skills-persona.component.html',
  styleUrls: ['./skills-persona.component.css']
})
export class SkillsPersonaComponent implements OnInit {

  @Input() skills: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.skills);
  }

}
