import { HttpHeaders } from '@angular/common/http';

export const apiURL = "/api";

export let userId = 2;

export const header = new HttpHeaders({
    "Content-Type": "multipart/form-data"
})

export const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export const fileURL = "/file/Users/Lucas/workspace/lp2/spotifree_csharp";