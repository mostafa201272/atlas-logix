import { inject, Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { HOME_APIS } from '@utilities/apis/modules/home/home.apis';

@Injectable({
  providedIn: 'root',
})
export class HomeApisService {
  /**
   * Injection - inject the global http service layer
   */
  httpService = inject(HttpService);

  /**
   * GET - Load data
   */
  getData(searchParams: any) {
    return this.httpService.getData(HOME_APIS.DATA, searchParams);
  }

  /**
   * GET - Search about data
   * @param searchKey
   * @returns
   */
  searchData(searchKey: string) {
    return this.httpService.getData(HOME_APIS.DATA, { searchKey: searchKey });
  }

  /**
   * POST - Post data
   */
  postData(body: any) {
    return this.httpService.postData(HOME_APIS.DATA, body);
  }

  /**
   * PATCH - Patch data
   */
  patchData(id: string, body: any) {
    return this.httpService.patchData(`${HOME_APIS.DATA}/${id}`, body);
  }

  /**
   * PUT - Put data
   */
  putData(id: string, body: any) {
    return this.httpService.putData(`${HOME_APIS.DATA}/${id}`, body);
  }

  /**
   * DELETE - Delete data
   */
  deleteData(id: string) {
    return this.httpService.deleteData(`${HOME_APIS.DATA}/${id}`);
  }
}
