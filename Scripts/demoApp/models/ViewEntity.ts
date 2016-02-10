module DemoApp.Models {
    export class ViewEntity<T extends BaseModel> {
        private entity: T;
        constructor(arg: T) {
            this.entity = arg;
        }
        public getName = () => {
            return this.entity.Name;
        }
    }
}