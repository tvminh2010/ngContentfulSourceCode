import { Injectable } from '@angular/core';
/* - Bổ sung thêm các dependencies sau */
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });
  /* ------------------------------------------- */
  constructor() { }
  /* ------------------------------------------- */
  getCourses(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'course'
    }, query))
      .then(res => res.items);
  }
  /* ------------------------------------------- */
  getCourse(courseId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
     content_type: 'course'
    }, {'sys.id': courseId}))
      .then(res => res.items[0]);
  }
  /* ------------------------------------------- */
}
