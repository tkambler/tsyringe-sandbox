import { injectable } from 'tsyringe';

@injectable()
class DB {

    public getCars() {
        return ['BMW', 'Toyota', 'Honda'];
    }

}

export default DB;