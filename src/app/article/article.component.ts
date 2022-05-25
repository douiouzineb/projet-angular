import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
article:FormGroup

  constructor(private fb: FormBuilder,private service:ArticleService,private router:ActivatedRoute) { }
   token: any = 'Bearer '+this.router.snapshot.params['Bearer'];

  ngOnInit(): void {
    this.article = this.fb.group({

      nom: [''],
      type:[''],
      prix:['']
    });
    console.log(this.article.value);
  }
onSubmit(){
  console.log(this.token)
  console.log(this.article.value)
  this.service.addarticle(this.article.value,this.token).subscribe(
    res=>console.log(res)
  )
}
}
