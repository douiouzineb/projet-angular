import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomeService } from 'src/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  userData: any;
  posts: any[];
  constructor(private service: HomeService, private router: ActivatedRoute) {}
  token: any = 'Bearer ' + this.router.snapshot.params['Bearer'];
  infoPost: any;

  ngOnInit(): void {
    this.getUserAuth();
    this.getPostsByUser();
  }

  getNomUser() {
    return (
      JSON.parse(this.userData)[0].nom +
      ' ' +
      JSON.parse(this.userData)[0].prenom
    );
  }

  getUserAuth() {
    this.service.getone(this.token).subscribe((res) => {
      var json = JSON.stringify(res);
      console.log(json);
      console.log(JSON.parse(json)[0].id);
      this.userData = json;
    });
  }

  getPostsByUser() {
    this.service.getPosts(this.token).subscribe((res) => {
      this.posts = res;
      console.log('getPostsByUser()', this.posts);
    });
  }

  // insertComment(e: any) {
  //   console.log(e);
  // }

  getDescription(nom: any, type: any, prix: any) {
    return nom + ' ' + type + ' ' + prix;
  }
  getNomPostOwner(nom: any, prenom: any) {
    return nom + ' ' + prenom;
  }

  getNbLikes(post: any) {
    return post.likes[0].LIKES;
  }

  getNbDislikes(post: any) {
    return post.dislikes[0].DISLIKES;
  }

  setLike(post_id: any) {
    console.log({ post_id });

    this.service
      .setLike(this.token, { post_id })
      .subscribe((res) => this.getPostsByUser());
  }

  setDislike(post_id: any) {
    console.log({ post_id });

    this.service
      .setDislike(this.token, { post_id })
      .subscribe((res) => this.getPostsByUser());
  }
}
