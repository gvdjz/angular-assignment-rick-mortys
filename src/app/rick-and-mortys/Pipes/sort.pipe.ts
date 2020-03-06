import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
    (p1: any, p2: any): number
}
@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{

    private getComparer(id) : Comparer {
        return function compareByCost(p1 : any, p2 : any) : number {
            if (p1.id < p2.id) return -1;
            if (p1.id > p2.id) return 1;
            return 0;
        }
    }

    private getDescendigComparer(comparer) : Comparer {
        return function (p1 : any, p2 : any) : number {
            return comparer(p1, p2) * -1;
        }
    }
    transform(data : any[], attrName : string,id:string){

        if (!data || !data.length || !attrName) return data;
        let comparer = this.getComparer(id);
        if (attrName === 'descending'){
          comparer = this.getDescendigComparer(comparer);

        }

        data.sort(comparer);
        return data;
    }
}
