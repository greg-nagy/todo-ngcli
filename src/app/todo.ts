export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {

    // http://stackoverflow.com/questions/35959372/property-assign-does-not-exist-on-type-objectconstructor
    (Object as any).assign(this, values);
  }
}
