import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headbanner',
  standalone: true,
  imports: [],
  templateUrl: './headbanner.component.html',
  styleUrl: './headbanner.component.css',
})
export class HeadbannerComponent implements OnInit {
  @Input()
  heading!: string;
  @Input()
  description!: string;

  @Input() boldText!: string;
  @Input() buttonText!: string;

  @Input() imgSrc!: string;

  ngOnInit(): void {}
}
