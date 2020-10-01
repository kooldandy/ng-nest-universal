import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sgb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private url = `http://localhost:58067/api/`;
  title = 'shibu';
  public data = '';
  constructor(
    private http: HttpClient,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Shibu the dog' }
    );

    this.http.get(`${this.url}hello`).subscribe((res: any) => {
      console.log(res);
      this.data = res ? res.message : 'No Data';
    });
  }

}
