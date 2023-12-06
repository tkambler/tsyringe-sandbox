import { inject, injectable } from 'tsyringe';

@injectable()
class DB {

    public constructor(
      @inject('settings') private settings: any
    ) {}

    public getCars() {
        console.log('DB is fetching cars using settings:', JSON.stringify(this.settings));
        return ['BMW', 'Toyota', 'Honda'];
    }

}

export default DB;
