/* istanbul ignore file */
/* eslint-disable */
import Adapter from '../../adapter';
import {NetworkOptions, SerialPortOptions, AdapterOptions} from 'src/adapter/tstype';
import Driver from '../driver';

class EzspAdapter extends Adapter{
    private driver: Driver;

    public constructor(networkOptions: NetworkOptions,
        serialPortOptions: SerialPortOptions, backupPath: string, adapterOptions: AdapterOptions) {

        super(networkOptions, serialPortOptions, backupPath, adapterOptions);
        this.driver = new Driver(serialPortOptions.path);
    }

    public static async autoDetectPath(): Promise<string> {
        return Driver.autoDetectPath();
    }
}

export {
    EzspAdapter,
};