import { Component, OnInit } from '@angular/core';
import { posts } from '../blog-posts/posts';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  posts = posts;
  constructor() { }

  ngOnInit(): void {
  }

}
