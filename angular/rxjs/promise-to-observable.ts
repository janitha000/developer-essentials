const promise : Promise<any>  = Promise.resolve("resoloved");

const observable =  from(promise);

this.observable.subscribe((res) => console.log(res));
