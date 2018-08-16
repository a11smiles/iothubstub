import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: Observable<object>;

  private configSubject = new Subject<object>();

  constructor(
    private storage: Storage
  ) {
    this.config = this.configSubject.asObservable();

    this.storage.ready().then(() => {
      this.storage.get('config')
        .then(
          data => {
            if (!!data) {
              this.configSubject.next(data);
            } else {
              this.configSubject.next(null);
            }
          }
        )
    });
  }

  setConfig(data: object) {
    this.storage.set('config', data)
      .then(
        () => {
          this.configSubject.next(data);
        }
      )

  }
}
