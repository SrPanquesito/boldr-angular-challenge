import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplifyWorkType'
})
export class SimplifyWorkTypePipe implements PipeTransform {

  transform(value: string | String, ...args: unknown[]): string {
    if (value.includes('book')) return 'Book'
    if (value.includes('article')) return 'Article'
    if (value.includes('data')) return 'Data'
    if (value.includes('reference')) return 'Reference'
    if (value.includes('post')) return 'Post'
    if (value.includes('component')) return 'Component'
    return 'Other'
  }

}
